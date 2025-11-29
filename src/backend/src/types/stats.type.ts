export interface Units {
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
  coreUnits: Units[],
  flexUnits: Units[],
  stats: Stats
}

export interface TopComps {
  topComps: TopComp[]
};