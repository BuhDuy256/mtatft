import db from '../database/db';

export interface MetaCompRow {
  id: number;
  name: string;
  tier: string;
  comp_fingerprint: string;
  standard_comp: string;
  avg_placement: number;
  top4_rate: number;
  win_rate: number;
  pick_rate: number;
}

export const getTopCompsByPatch = async (patch: number): Promise<MetaCompRow[]> => {
  return db('meta_comps as mc')
    .join('meta_snapshots as ms', 'mc.snapshot_id', 'ms.id')
    .where('ms.patch_version', patch.toString())
    .select(
      'mc.id',
      'mc.name',
      'mc.tier',
      'mc.comp_fingerprint',
      'mc.standard_comp',
      'mc.avg_placement',
      'mc.top4_rate',
      'mc.win_rate',
      'mc.pick_rate'
    )
    .orderBy('mc.avg_placement', 'asc');
};
