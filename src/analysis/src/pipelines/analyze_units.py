import pandas as pd
from sqlalchemy import text
import json

def analyze_units(engine, patch_version):
    print(f"\n=== Analyzing Units for Patch {patch_version} ===")
    
    query = text("""
        SELECT 
            mu.unit_id,
            p.placement,
            p.match_id,
            p.puuid,
            mu.id as unit_instance_id
        FROM match_units mu
        JOIN participants p ON 
            mu.match_id = p.match_id AND 
            mu.puuid = p.puuid
        JOIN matches m ON p.match_id = m.id
        WHERE m.game_version LIKE :version_pattern
    """)
    
    params = {"version_pattern": f"%<Releases/{patch_version}>%"}
    
    df = pd.read_sql(query, engine, params=params)
    print(f"Loaded {len(df)} unit instances")
    
    if len(df) == 0:
        print("No unit data found!")
        return pd.DataFrame()
    
    items_query = text("""
        SELECT 
            mui.unit_instance_id,
            mui.item_name
        FROM match_unit_items mui
        JOIN match_units mu ON mui.unit_instance_id = mu.id
        JOIN matches m ON mu.match_id = m.id
        WHERE m.game_version LIKE :version_pattern
    """)
    
    items_df = pd.read_sql(items_query, engine, params=params)
    print(f"Loaded {len(items_df)} item associations")
    
    total_matches_query = text("""
        SELECT COUNT(DISTINCT id) as total
        FROM matches
        WHERE game_version LIKE :version_pattern
    """)
    total_matches = pd.read_sql(total_matches_query, engine, params=params)['total'][0]
    print(f"Total matches: {total_matches}")
    
    unit_stats = []
    
    for unit_id, group in df.groupby('unit_id'):
        play_count = len(group)
        avg_placement = group['placement'].mean()
        top4_rate = (group['placement'] <= 4).sum() / play_count
        win_rate = (group['placement'] == 1).sum() / play_count
        unique_matches = group['match_id'].nunique()
        pick_rate = unique_matches / total_matches
        unit_items = items_df[items_df['unit_instance_id'].isin(group['unit_instance_id'])]
        item_counts = unit_items['item_name'].value_counts().head(5)
        best_items = [
            {
                "item": item,
                "count": int(count),
                "rate": round(count / play_count, 4)
            }
            for item, count in item_counts.items()
        ]
        unit_stats.append({
            'unit_id': unit_id,
            'avg_placement': round(avg_placement, 2),
            'top4_rate': round(top4_rate, 4),
            'win_rate': round(win_rate, 4),
            'pick_rate': round(pick_rate, 4),
            'play_count': play_count,
            'best_items': json.dumps(best_items)
        })
    
    result_df = pd.DataFrame(unit_stats)
    result_df = result_df.sort_values('avg_placement')
    print(f"\nCalculated stats for {len(result_df)} units")
    print(f"Top 10 units by avg_placement:")
    print(result_df.head(10)[['unit_id', 'avg_placement', 'top4_rate', 'win_rate', 'pick_rate']])
    return result_df
