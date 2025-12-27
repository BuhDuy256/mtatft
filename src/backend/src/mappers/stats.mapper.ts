import { Stats, Unit, Item, TopComp, TopCompsResponse, ItemStat, ItemStatsResponse, TraitStat, TraitStatsResponse, UnitStat, UnitStatsResponse } from '../api/dtos/responses/stats.type';

/**
 * Maps stats from database format (snake_case) to API format (camelCase)
 */
export const mapStats = (rawStats: any): Stats => ({
  playRate: Number(rawStats.pick_rate || rawStats.play_rate),
  avgPlace: Number(rawStats.avg_placement || rawStats.avg_place),
  top4Rate: Number(rawStats.top4_rate),
  winRate: Number(rawStats.win_rate),
});

/**
 * Helper to clean unit names from IDs
 */
const cleanUnitName = (unitId: string): string => unitId.split('_')[1] || unitId;

/**
 * Maps a composition from database format to API format
 */
export const mapTopComp = (comp: any): TopComp => {
  const coreUnitIds = comp.comp_fingerprint.split(',');
  const coreUnits: Unit[] = coreUnitIds.map((id: string) => ({
    id: id,
    name: cleanUnitName(id),
  }));

  const standardUnitIds = comp.standard_comp ? comp.standard_comp.split(',') : [];
  const flexUnitIds = standardUnitIds.filter((id: string) => !coreUnitIds.includes(id));
  const flexUnits: Unit[] = flexUnitIds.map((id: string) => ({
    id: id,
    name: cleanUnitName(id),
  }));

  return {
    id: comp.id,
    name: comp.name,
    tier: comp.tier,
    coreUnit: coreUnits,
    flexUnit: flexUnits,
    stats: mapStats(comp),
  };
};

/**
 * Maps top comps response
 */
export const mapTopCompsResponse = (patch: number, comps: any[]): TopCompsResponse => ({
  patch,
  topComps: comps.map(mapTopComp),
});

/**
 * Maps item stat from database format to API format
 */
export const mapItemStat = (stat: any): ItemStat => {
  const topUsers = (stat.top_users || []).map((user: any) => {
    const unitId = user.unit_id;
    return {
      id: unitId,
      name: unitId.split('_')[1] || unitId,
    };
  });

  return {
    id: stat.id,
    name: stat.name,
    icon: stat.iconUrl,
    stats: mapStats(stat),
    topUsers,
  };
};

/**
 * Maps item stats response
 */
export const mapItemStatsResponse = (patch: number, stats: any[]): ItemStatsResponse => ({
  patch,
  itemStats: stats.map(mapItemStat),
});

/**
 * Maps trait stat from database format to API format
 */
export const mapTraitStat = (stat: any): TraitStat => ({
  id: stat.id,
  name: stat.name,
  icon: stat.iconUrl,
  stats: mapStats(stat),
});

/**
 * Maps trait stats response
 */
export const mapTraitStatsResponse = (patch: number, stats: any[]): TraitStatsResponse => ({
  patch,
  traitStats: stats.map(mapTraitStat),
});

/**
 * Maps unit stat from database format to API format
 */
export const mapUnitStat = (stat: any): UnitStat => {
  let bestItems = stat.best_items;
  if (typeof bestItems === 'string') {
    try {
      bestItems = JSON.parse(bestItems);
    } catch (e) {
      bestItems = [];
    }
  }
  
  const topItems: Item[] = (Array.isArray(bestItems) ? bestItems : []).map((entry: any) => {
    const itemId = entry.item;
    return {
      id: itemId,
      name: itemId.split('_').pop() || itemId,
    };
  });

  return {
    id: stat.id,
    name: stat.name,
    icon: stat.iconUrl,
    stats: mapStats(stat),
    topItems,
  };
};

/**
 * Maps unit stats response
 */
export const mapUnitStatsResponse = (patch: number, stats: any[]): UnitStatsResponse => ({
  patch,
  unitStats: stats.map(mapUnitStat),
});
