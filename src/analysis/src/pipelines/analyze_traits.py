import pandas as pd
from sqlalchemy import text

def analyze_traits(engine, patch_version):
    print(f"\n=== Analyzing Traits for Patch {patch_version} ===")
    
    query = text("""
        SELECT 
            mt.name as trait_id,
            mt.num_units,
            p.placement,
            p.match_id,
            p.puuid
        FROM match_traits mt
        JOIN participants p ON 
            mt.match_id = p.match_id AND 
            mt.puuid = p.puuid
        JOIN matches m ON p.match_id = m.id
        WHERE m.game_version LIKE :version_pattern
    """)
    
    params = {"version_pattern": f"%<Releases/{patch_version}>%"}
    
    df = pd.read_sql(query, engine, params=params)
    print(f"Loaded {len(df)} trait instances")
    
    if len(df) == 0:
        print("No trait data found!")
        return pd.DataFrame()
    
    total_matches_query = text("""
        SELECT COUNT(DISTINCT id) as total
        FROM matches
        WHERE game_version LIKE :version_pattern
    """)
    total_matches = pd.read_sql(total_matches_query, engine, params=params)['total'][0]
    print(f"Total matches: {total_matches}")
    
    trait_stats = []
    
    for (trait_id, num_units), group in df.groupby(['trait_id', 'num_units']):
        play_count = len(group)
        avg_placement = group['placement'].mean()
        top4_rate = (group['placement'] <= 4).sum() / play_count
        win_rate = (group['placement'] == 1).sum() / play_count
        unique_matches = group['match_id'].nunique()
        pick_rate = unique_matches / total_matches
        
        trait_stats.append({
            'trait_id': trait_id,
            'num_units': num_units,
            'avg_placement': round(avg_placement, 2),
            'top4_rate': round(top4_rate, 4),
            'win_rate': round(win_rate, 4),
            'pick_rate': round(pick_rate, 4),
            'play_count': play_count
        })
    
    result_df = pd.DataFrame(trait_stats)
    result_df = result_df.sort_values('avg_placement')
    
    print(f"\nCalculated stats for {len(result_df)} trait configurations")
    print(f"Top 5 traits by avg_placement:")
    print(result_df.head(10)[['trait_id', 'num_units', 'avg_placement', 'top4_rate', 'win_rate', 'pick_rate']])
    
    return result_df
