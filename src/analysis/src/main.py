import sys

sys.path.append('src')

from core.database import get_engine
from core.config import DEFAULT_TARGET_PATCH
from pipelines.analyze_traits import analyze_traits
from pipelines.analyze_items import analyze_items
from pipelines.analyze_units import analyze_units
from pipelines.analyze_comps import analyze_comps_for_patch
from repositories.meta_result_repo import (
    create_or_get_snapshot,
    save_trait_stats,
    save_item_stats,
    save_unit_stats,
    save_comp_stats
)

def main(patch_version=None):
    if patch_version is None:
        patch_version = DEFAULT_TARGET_PATCH

    print(f"\n{'='*60}")
    print(f"Starting Meta Analysis Pipeline for Patch {patch_version}")
    print(f"{'='*60}\n")

    try:
        engine = get_engine()
        print("Database connection established")

        snapshot_id = create_or_get_snapshot(
            engine, 
            patch_version,
            note=f"Auto-generated meta analysis for patch {patch_version}"
        )
        print(f"Using snapshot ID: {snapshot_id}\n")

        print("\n" + "="*60)
        trait_stats_df = analyze_traits(engine, patch_version)
        if not trait_stats_df.empty:
            save_trait_stats(engine, snapshot_id, trait_stats_df)
            print(f"Trait analysis completed: {len(trait_stats_df)} records")
        else:
            print("No trait data to save")

        print("\n" + "="*60)
        item_stats_df = analyze_items(engine, patch_version)
        if not item_stats_df.empty:
            save_item_stats(engine, snapshot_id, item_stats_df)
            print(f"Item analysis completed: {len(item_stats_df)} records")
        else:
            print("No item data to save")

        print("\n" + "="*60)
        unit_stats_df = analyze_units(engine, patch_version)
        if not unit_stats_df.empty:
            save_unit_stats(engine, snapshot_id, unit_stats_df)
            print(f"Unit analysis completed: {len(unit_stats_df)} records")
        else:
            print("No unit data to save")

        print("\n" + "="*60)
        comp_stats_df = analyze_comps_for_patch(engine, patch_version)
        if not comp_stats_df.empty:
            save_comp_stats(engine, snapshot_id, comp_stats_df)
            print(f"Comp analysis completed: {len(comp_stats_df)} records")
        else:
            print("No comp data to save")

        print("\n" + "="*60)
        print("Meta Analysis Pipeline Completed Successfully!")
        print("="*60)
        print(f"Snapshot ID: {snapshot_id}")
        print(f"Patch Version: {patch_version}")
        print(f"Trait Stats: {len(trait_stats_df)} records")
        print(f"Item Stats: {len(item_stats_df)} records")
        print(f"Unit Stats: {len(unit_stats_df)} records")
        print(f"Comp Stats: {len(comp_stats_df)} records")
        print("="*60 + "\n")

    except Exception as e:
        print(f"\nError occurred: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        patch = sys.argv[1]
        main(patch)
    else:
        main()