export interface Unit {
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
  stats: Stats
}

export interface TopComps {
  topComps: TopComp[]
};

export interface ItemStat {
  id: string;
  name: string;
  icon: string;
  playRate: number;
  place: number;
  top4: number;
  win: number;
  topUsers: Unit[];
}

export interface ItemStatsResponse {
  itemStats: ItemStat[];
}

export interface TraitStat {
  id: string;
  name: string;
  icon: string;
  playRate: number;
  place: number;
  top4: number;
  win: number;
}

export interface TraitStatsResponse {
  traitStats: TraitStat[];
}