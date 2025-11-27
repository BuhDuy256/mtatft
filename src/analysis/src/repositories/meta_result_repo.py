import pandas as pd
from sqlalchemy import text
import json

def create_or_get_snapshot(engine, patch_version, note=None):
    with engine.connect() as conn:
        query = text("""
            SELECT id FROM meta_snapshots 
            WHERE patch_version = :patch_version
        """)
        result = conn.execute(query, {"patch_version": patch_version}).fetchone()
        
        if result:
            print(f"Found existing snapshot with ID: {result[0]}")
            return result[0]
        
        insert_query = text("""
            INSERT INTO meta_snapshots (patch_version, note)
            VALUES (:patch_version, :note)
            RETURNING id
        """)
        result = conn.execute(insert_query, {
            "patch_version": patch_version,
            "note": note
        })
        conn.commit()
        snapshot_id = result.fetchone()[0]
        print(f"Created new snapshot with ID: {snapshot_id}")
        return snapshot_id

def save_trait_stats(engine, snapshot_id, trait_stats_df):
    with engine.connect() as conn:
        delete_query = text("""
            DELETE FROM meta_trait_stats 
            WHERE snapshot_id = :snapshot_id
        """)
        conn.execute(delete_query, {"snapshot_id": snapshot_id})
        
        for _, row in trait_stats_df.iterrows():
            insert_query = text("""
                INSERT INTO meta_trait_stats (
                    snapshot_id, trait_id, num_units, 
                    avg_placement, top4_rate, win_rate, 
                    pick_rate, play_count
                )
                VALUES (
                    :snapshot_id, :trait_id, :num_units,
                    :avg_placement, :top4_rate, :win_rate,
                    :pick_rate, :play_count
                )
            """)
            conn.execute(insert_query, {
                "snapshot_id": snapshot_id,
                "trait_id": row['trait_id'],
                "num_units": int(row['num_units']),
                "avg_placement": float(row['avg_placement']),
                "top4_rate": float(row['top4_rate']),
                "win_rate": float(row['win_rate']),
                "pick_rate": float(row['pick_rate']),
                "play_count": int(row['play_count'])
            })
        
        conn.commit()
        print(f"Saved {len(trait_stats_df)} trait stats to database")

def save_item_stats(engine, snapshot_id, item_stats_df):
    with engine.connect() as conn:
        delete_query = text("""
            DELETE FROM meta_item_stats 
            WHERE snapshot_id = :snapshot_id
        """)
        conn.execute(delete_query, {"snapshot_id": snapshot_id})
        
        for _, row in item_stats_df.iterrows():
            insert_query = text("""
                INSERT INTO meta_item_stats (
                    snapshot_id, item_id, 
                    avg_placement, top4_rate, win_rate, 
                    pick_rate, play_count
                )
                VALUES (
                    :snapshot_id, :item_id,
                    :avg_placement, :top4_rate, :win_rate,
                    :pick_rate, :play_count
                )
            """)
            conn.execute(insert_query, {
                "snapshot_id": snapshot_id,
                "item_id": row['item_id'],
                "avg_placement": float(row['avg_placement']),
                "top4_rate": float(row['top4_rate']),
                "win_rate": float(row['win_rate']),
                "pick_rate": float(row['pick_rate']),
                "play_count": int(row['play_count'])
            })
        
        conn.commit()
        print(f"Saved {len(item_stats_df)} item stats to database")

def save_unit_stats(engine, snapshot_id, unit_stats_df):
    records = unit_stats_df.to_dict(orient='records')

    with engine.connect() as conn:
        delete_query = text("""
            DELETE FROM meta_unit_stats 
            WHERE snapshot_id = :snapshot_id
        """)
        conn.execute(delete_query, {"snapshot_id": snapshot_id})
        
        for row in records:
            insert_query = text("""
                INSERT INTO meta_unit_stats (
                    snapshot_id, unit_id, 
                    avg_placement, top4_rate, win_rate, 
                    pick_rate, play_count, best_items
                )
                VALUES (
                    :snapshot_id, :unit_id,
                    :avg_placement, :top4_rate, :win_rate,
                    :pick_rate, :play_count, 
                    CAST(:best_items AS JSONB)
                )
            """)
            
            items_data = row.get('best_items')
            if items_data is None:
                json_items = '[]'
            else:
                json_items = json.dumps(items_data)

            conn.execute(insert_query, {
                "snapshot_id": snapshot_id,
                "unit_id": row['unit_id'],
                "avg_placement": float(row['avg_placement']),
                "top4_rate": float(row['top4_rate']),
                "win_rate": float(row['win_rate']),
                "pick_rate": float(row['pick_rate']),
                "play_count": int(row['play_count']),
                "best_items": json_items 
            })
        
        conn.commit()
        print(f"Saved {len(unit_stats_df)} unit stats to database")

def _calculate_tier(avg_placement: float) -> str:
    if avg_placement <= 4.10:
        return 'S'
    elif avg_placement <= 4.40:
        return 'A'
    elif avg_placement <= 4.70:
        return 'B'
    elif avg_placement <= 5.00:
        return 'C'
    else:
        return 'D'

def save_comp_stats(engine, snapshot_id, comp_stats_df):
    with engine.connect() as conn:
        delete_comps_query = text("""
            DELETE FROM meta_comps 
            WHERE snapshot_id = :snapshot_id
        """)
        conn.execute(delete_comps_query, {"snapshot_id": snapshot_id})
        
        for _, row in comp_stats_df.iterrows():
            avg_placement = float(row['avg_placement'])
            tier = _calculate_tier(avg_placement)
            
            insert_comp_query = text("""
                INSERT INTO meta_comps (
                    snapshot_id, name, comp_fingerprint, tier,
                    avg_placement, top4_rate, win_rate, 
                    pick_rate, play_count, standard_comp
                )
                VALUES (
                    :snapshot_id, :name, :comp_fingerprint, :tier,
                    :avg_placement, :top4_rate, :win_rate,
                    :pick_rate, :play_count, :standard_comp
                )
                RETURNING id
            """)
            
            core_units = sorted(row.get('core_units', []))
            comp_fingerprint = ','.join(core_units)
            
            standard_comp_list = row.get('standard_comp', [])
            standard_comp_str = ','.join(standard_comp_list) if standard_comp_list else None
            
            result = conn.execute(insert_comp_query, {
                "snapshot_id": snapshot_id,
                "name": row['comp_name'],
                "comp_fingerprint": comp_fingerprint,
                "tier": tier,
                "avg_placement": avg_placement,
                "top4_rate": float(row['top4_rate']),
                "win_rate": float(row['win_rate']),
                "pick_rate": float(row['pick_rate']),
                "play_count": int(row['play_count']),
                "standard_comp": standard_comp_str
            })
            
            meta_comp_id = result.fetchone()[0]
            
            unit_frequencies = row.get('unit_frequencies', {})
            core_units_set = set(row.get('core_units', []))
            
            for unit_id, frequency in unit_frequencies.items():
                is_core = unit_id in core_units_set
                items_data = []
                
                insert_unit_query = text("""
                    INSERT INTO meta_comp_units (
                        meta_comp_id, unit_id, is_core, frequency, items
                    )
                    VALUES (
                        :meta_comp_id, :unit_id, :is_core, :frequency, 
                        CAST(:items AS JSONB)
                    )
                """)
                
                conn.execute(insert_unit_query, {
                    "meta_comp_id": meta_comp_id,
                    "unit_id": unit_id,
                    "is_core": is_core,
                    "frequency": float(frequency),
                    "items": json.dumps(items_data)
                })
        
        conn.commit()
        print(f"Saved {len(comp_stats_df)} comp stats to database")
