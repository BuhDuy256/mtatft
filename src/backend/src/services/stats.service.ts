import * as CompRepository from '../repositories/comp.repository';
import * as StatsRepository from '../repositories/stats.repository';
import { StatsQuery } from '../api/schemas/stats.schema';
import { TopCompsResponse, ItemStatsResponse, TraitStatsResponse, UnitStatsResponse } from '../types/stats.type';

export const getTopComps = async (query: StatsQuery): Promise<TopCompsResponse> => {
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

  return { patch, topComps };
};

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
      stats: {
        play_rate: Number(stat.pick_rate),
        avg_place: Number(stat.avg_placement),
        top4_rate: Number(stat.top4_rate),
        win_rate: Number(stat.win_rate)
      },
      topUsers
    };
  });

  return { patch, itemStats };
};

export const getTraitStats = async (query: StatsQuery): Promise<TraitStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getTraitStatsByPatch(patch);

  const traitStats = rawStats.map(stat => ({
    id: stat.id,
    name: stat.name,
    icon: stat.iconUrl,
    stats: {
      play_rate: Number(stat.pick_rate),
      avg_place: Number(stat.avg_placement),
      top4_rate: Number(stat.top4_rate),
      win_rate: Number(stat.win_rate)
    }
  }));

  return { patch, traitStats };
};

export const getUnitStats = async (query: StatsQuery): Promise<UnitStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getUnitStatsByPatch(patch);

  const unitStats = rawStats.map(stat => {
    // Parse items to get top items
    let bestItems = stat.best_items;
    if (typeof bestItems === 'string') {
      try {
        bestItems = JSON.parse(bestItems);
      } catch (e) {
        bestItems = [];
      }
    }
    const topItems = (Array.isArray(bestItems) ? bestItems : []).map((entry: any) => {
      const itemId = entry.item;
      return {
        id: itemId,
        name: itemId.split('_').pop() || itemId
      };
    });

    return {
      id: stat.id,
      name: stat.name,
      icon: stat.iconUrl,
      stats: {
        play_rate: Number(stat.pick_rate),
        avg_place: Number(stat.avg_placement),
        top4_rate: Number(stat.top4_rate),
        win_rate: Number(stat.win_rate)
      },
      topItems
    };
  });

  return { patch, unitStats };
};
