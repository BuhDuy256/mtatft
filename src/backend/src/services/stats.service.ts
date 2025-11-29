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
      coreUnit: coreUnits,
      flexUnit: flexUnits,
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

import * as StatsRepository from '../repositories/stats.repository';
import { ItemStatsResponse } from '../types/stats.type';

export const getItemStats = async (query: StatsQuery): Promise<ItemStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getItemStatsByPatch(patch);

  const itemStats = rawStats.map(stat => {
    // Parse top users to get unit IDs
    const topUsers = (stat.top_users || []).map((user: any) => {
      const unitId = user.unit_id;
      return {
        id: unitId,
        name: unitId.split('_')[1] || unitId
      };
    });

    return {
      id: stat.id,
      name: stat.name,
      icon: stat.iconUrl,
      playRate: stat.pick_rate,
      place: stat.avg_placement,
      top4: stat.top4_rate,
      win: stat.win_rate,
      topUsers
    };
  });

  return { itemStats };
};

import { TraitStatsResponse } from '../types/stats.type';

export const getTraitStats = async (query: StatsQuery): Promise<TraitStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getTraitStatsByPatch(patch);

  const traitStats = rawStats.map(stat => ({
    id: stat.id,
    name: stat.name,
    icon: stat.iconUrl,
    playRate: Number(stat.pick_rate),
    place: Number(stat.avg_placement),
    top4: Number(stat.top4_rate),
    win: Number(stat.win_rate)
  }));

  return { traitStats };
};
