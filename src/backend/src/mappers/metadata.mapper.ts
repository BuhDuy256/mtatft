import { UnitMetadata, TraitMetadata, ItemMetadata, MetadataResponse } from '../api/dtos/responses/metadata.type';

/**
 * Maps unit data from database format (snake_case) to API format (camelCase)
 */
export const mapUnitToMetadata = (unit: any): UnitMetadata => ({
  id: unit.id,
  name: unit.name,
  cost: unit.cost,
  traits: unit.traits || [],
  imageUrl: unit.image_url || unit.iconUrl,
});

/**
 * Maps trait data from database format (snake_case) to API format (camelCase)
 */
export const mapTraitToMetadata = (trait: any): TraitMetadata => ({
  id: trait.id,
  name: trait.name,
  imageUrl: trait.image_url || trait.iconUrl,
});

/**
 * Maps item data from database format (snake_case) to API format (camelCase)
 */
export const mapItemToMetadata = (item: any): ItemMetadata => ({
  id: item.id,
  name: item.name,
  imageUrl: item.image_url || item.iconUrl,
});

/**
 * Maps complete metadata response from service data to API format
 */
export const mapMetadataResponse = (
  season: number,
  units: UnitMetadata[],
  traits: TraitMetadata[],
  items: ItemMetadata[]
): MetadataResponse => ({
  season,
  units,
  traits,
  items,
});
