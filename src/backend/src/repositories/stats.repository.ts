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
