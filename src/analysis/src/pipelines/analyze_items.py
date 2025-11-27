import pandas as pd
from sqlalchemy import text
from core.constants import NUM_TOP_USERS_FOR_ITEMS

def analyze_items(engine, patch_version):
    print(f"\n=== Analyzing Items for Patch {patch_version} ===")
    
    query = text("""
        SELECT 
            mui.item_name as item_id,
            mu.unit_id,
            p.placement,
            p.match_id,
            p.puuid
        FROM match_unit_items mui
        JOIN match_units mu ON mui.unit_instance_id = mu.id
        JOIN participants p ON 
            mu.match_id = p.match_id AND 
            mu.puuid = p.puuid
        JOIN matches m ON p.match_id = m.id
        WHERE m.game_version LIKE :version_pattern
    """)
    
    params = {"version_pattern": f"%<Releases/{patch_version}>%"}
    
    df = pd.read_sql(query, engine, params=params)
    print(f"Loaded {len(df)} item instances")
    
    if len(df) == 0:
        print("No item data found!")
        return pd.DataFrame()
    
    total_matches_query = text("""
        SELECT COUNT(DISTINCT id) as total
        FROM matches
        WHERE game_version LIKE :version_pattern
    """)
    total_matches = pd.read_sql(total_matches_query, engine, params=params)['total'][0]
    print(f"Total matches: {total_matches}")
    
    item_stats = []
    
    for item_id, group in df.groupby('item_id'):
        play_count = len(group)
        avg_placement = group['placement'].mean()
        top4_rate = (group['placement'] <= 4).sum() / play_count
        win_rate = (group['placement'] == 1).sum() / play_count
        unique_matches = group['match_id'].nunique()
        pick_rate = unique_matches / total_matches
        
        unit_counts = group['unit_id'].value_counts()
        top_users = [
            {
                'unit_id': unit_id,
                'count': int(count),
                'rate': round(count / play_count, 3)
            }
            for unit_id, count in unit_counts.head(NUM_TOP_USERS_FOR_ITEMS).items()
        ]
        
        item_stats.append({
            'item_id': item_id,
            'avg_placement': round(avg_placement, 2),
            'top4_rate': round(top4_rate, 4),
            'win_rate': round(win_rate, 4),
            'pick_rate': round(pick_rate, 4),
            'play_count': play_count,
            'top_users': top_users
        })
    
    result_df = pd.DataFrame(item_stats)
    result_df = result_df.sort_values('avg_placement')
    
    print(f"\nCalculated stats for {len(result_df)} items")
    print(f"Top 10 items by avg_placement:")
    print(result_df.head(10)[['item_id', 'avg_placement', 'top4_rate', 'win_rate', 'pick_rate']])
    
    return result_df
