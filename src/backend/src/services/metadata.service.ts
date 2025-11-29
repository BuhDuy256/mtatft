import { MetadataQuery } from "../api/schemas/metadata.schema";

import { Metadata, ItemMetadata, TraitMetadata, UnitMetadata } from "../types/metadata.type";

import { getAllItems } from "../repositories/item.repository";
import { getAllTraits } from "../repositories/trait.repository";
import { getAllUnitsWithTraits } from "../repositories/unit.repository";

export const getMetadata = async (query: MetadataQuery): Promise<Metadata> => {
  const { season } = query;
  const [items, traits, unitsWithTraits] = await Promise.all([
    getAllItems(season),
    getAllTraits(season),
    getAllUnitsWithTraits(season)
  ]);

  const unitsMap = new Map<string, UnitMetadata>();

  for (const row of unitsWithTraits) {
    if (!unitsMap.has(row.id)) {
      unitsMap.set(row.id, {
        name: row.name,
        cost: row.cost,
        traits: [],
        image_url: row.iconUrl
      });
    }

    if (row.traitId) {
      unitsMap.get(row.id)!.traits.push(row.traitId);
    }
  }

  const formattedTraits: TraitMetadata[] = traits.map((trait: any) => ({
    name: trait.name,
    image_url: trait.iconUrl
  }));

  const formattedItems: ItemMetadata[] = items.map((item: any) => ({
    name: item.name,
    image_url: item.iconUrl
  }));

  return {
    season: season || 1, // Default value if not provided
    units: Array.from(unitsMap.values()),
    traits: formattedTraits,
    items: formattedItems
  }
}