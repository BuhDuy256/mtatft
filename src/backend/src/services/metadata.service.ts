import { MetadataQueryDto } from '../api/dtos/requests/metadata.schema';
import { MetadataResponse, UnitMetadata } from '../api/dtos/responses/metadata.type';

import { getAllItems } from '../repositories/item.repository';
import { getAllTraits } from '../repositories/trait.repository';
import { getAllUnitsWithTraits } from '../repositories/unit.repository';

import { mapTraitToMetadata, mapItemToMetadata, mapMetadataResponse } from '../mappers/metadata.mapper';

export const getMetadata = async (query: MetadataQueryDto): Promise<MetadataResponse> => {
  const { season } = query;
  
  const [items, traits, unitsWithTraits] = await Promise.all([
    getAllItems(season),
    getAllTraits(season),
    getAllUnitsWithTraits(season)
  ]);

  // Build units map with traits
  const unitsMap = new Map<string, UnitMetadata>();

  for (const row of unitsWithTraits) {
    if (!unitsMap.has(row.id)) {
      unitsMap.set(row.id, {
        id: row.id,
        name: row.name,
        cost: row.cost,
        traits: [],
        imageUrl: row.iconUrl
      });
    }

    if (row.traitId) {
      unitsMap.get(row.id)!.traits.push(row.traitId);
    }
  }

  // Use mappers to transform data to camelCase
  const formattedTraits = traits.map(mapTraitToMetadata);
  const formattedItems = items.map(mapItemToMetadata);
  const units = Array.from(unitsMap.values());

  return mapMetadataResponse(season, units, formattedTraits, formattedItems);
};