import * as CompRepository from '../repositories/comp.repository';
import * as StatsRepository from '../repositories/stats.repository';
import { StatsQueryDto } from '../api/dtos/requests/stats.schema';
import { TopCompsResponse, ItemStatsResponse, TraitStatsResponse, UnitStatsResponse } from '../api/dtos/responses/stats.type';
import { mapTopCompsResponse, mapItemStatsResponse, mapTraitStatsResponse, mapUnitStatsResponse } from '../mappers/stats.mapper';

export const getTopComps = async (query: StatsQueryDto): Promise<TopCompsResponse> => {
  const { patch } = query;
  const rawComps = await CompRepository.getTopCompsByPatch(patch);
  return mapTopCompsResponse(patch, rawComps);
};

export const getItemStats = async (query: StatsQueryDto): Promise<ItemStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getItemStatsByPatch(patch);
  return mapItemStatsResponse(patch, rawStats);
};

export const getTraitStats = async (query: StatsQueryDto): Promise<TraitStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getTraitStatsByPatch(patch);
  return mapTraitStatsResponse(patch, rawStats);
};

export const getUnitStats = async (query: StatsQueryDto): Promise<UnitStatsResponse> => {
  const { patch } = query;
  const rawStats = await StatsRepository.getUnitStatsByPatch(patch);
  return mapUnitStatsResponse(patch, rawStats);
};
