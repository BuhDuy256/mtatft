import db from '../database/db';

export interface ItemStatRow {
  id: string;
  name: string;
  iconUrl: string;
  pick_rate: number;
  avg_placement: number;
  top4_rate: number;
  win_rate: number;
  top_users: any; // JSONB
}

export const getItemStatsByPatch = async (patch: number): Promise<ItemStatRow[]> => {
  return db('meta_item_stats as mis')
    .join('static_items as si', 'mis.item_id', 'si.id')
    .join('meta_snapshots as ms', 'mis.snapshot_id', 'ms.id')
    .where('ms.patch_version', patch.toString())
    .select(
      'si.id',
      'si.name',
      'si.iconUrl',
      'mis.pick_rate',
      'mis.avg_placement',
      'mis.top4_rate',
      'mis.win_rate',
      'mis.top_users'
    )
    .orderBy('mis.pick_rate', 'desc');
};

export interface TraitStatRow {
  id: string;
  name: string;
  iconUrl: string;
  pick_rate: number;
  avg_placement: number;
  top4_rate: number;
  win_rate: number;
}

export const getTraitStatsByPatch = async (patch: number): Promise<TraitStatRow[]> => {
  return db('meta_trait_stats as mts')
    .join('static_traits as st', 'mts.trait_id', 'st.id')
    .join('meta_snapshots as ms', 'mts.snapshot_id', 'ms.id')
    .where('ms.patch_version', patch.toString())
    .groupBy('st.id', 'st.name', 'st.iconUrl')
    .select(
      'st.id',
      'st.name',
      'st.iconUrl',
      db.raw('SUM(mts.pick_rate) as pick_rate'),
      db.raw('SUM(mts.avg_placement * mts.play_count) / SUM(mts.play_count) as avg_placement'),
      db.raw('SUM(mts.top4_rate * mts.play_count) / SUM(mts.play_count) as top4_rate'),
      db.raw('SUM(mts.win_rate * mts.play_count) / SUM(mts.play_count) as win_rate')
    )
    .orderBy('pick_rate', 'desc');
};
