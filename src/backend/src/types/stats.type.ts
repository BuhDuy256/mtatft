export interface Unit {
  id: string,
  name: string,
}

export interface Item {
  id: string,
  name: string,
}

export interface Stats {
  play_rate: number,
  avg_place: number,
  top4_rate: number,
  win_rate: number,
}

export interface TopComp {
  id: number,
  name: string,
  tier: string,
  coreUnit: Unit[],
  flexUnit: Unit[],
  stats: Stats,
}

export interface TopCompsResponse {
  patch: number,
  topComps: TopComp[],
}

export interface ItemStat {
  id: string,
  name: string,
  icon: string,
  stats: Stats,
  topUsers: Unit[],
}

export interface ItemStatsResponse {
  patch: number,
  itemStats: ItemStat[],
}

export interface TraitStat {
  id: string,
  name: string,
  icon: string,
  stats: Stats,
}

export interface TraitStatsResponse {
  patch: number,
  traitStats: TraitStat[],
}

export interface UnitStat {
  id: string,
  name: string,
  icon: string,
  stats: Stats,
  topItems: Item[],
}

export interface UnitStatsResponse {
  patch: number,
  unitStats: UnitStat[],
}