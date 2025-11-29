import * as CompRepository from '../repositories/comp.repository';
import { StatsQuery } from '../api/schemas/stats.schema';
import { TopComps } from '../types/stats.type';

export const getTopComps = async (query: StatsQuery): Promise<TopComps> => {
  const { patch } = query;

  const rawComps = await CompRepository.getTopCompsByPatch(patch);

  const topComps = rawComps.map(comp => {
    const cleanUnitName = (unitId: string) => unitId.split('_')[1] || unitId;

    const coreUnitIds = comp.comp_fingerprint.split(',');
    const coreUnits = coreUnitIds.map(id => ({
      id: id,
      name: cleanUnitName(id)
    }));

    const standardUnitIds = comp.standard_comp ? comp.standard_comp.split(',') : [];

    const flexUnitIds = standardUnitIds.filter(id => !coreUnitIds.includes(id));
    const flexUnits = flexUnitIds.map(id => ({
      id: id,
      name: cleanUnitName(id)
    }));

    return {
      id: comp.id,
      name: comp.name,
      tier: comp.tier,
      coreUnits,
      flexUnits,
      stats: {
        play_rate: comp.pick_rate,
        avg_place: comp.avg_placement,
        top4_rate: comp.top4_rate,
        win_rate: comp.win_rate
      }
    };
  });

  return { topComps };
};
