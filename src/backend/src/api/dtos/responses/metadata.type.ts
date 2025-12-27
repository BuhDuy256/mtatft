export interface UnitMetadata {
  id: string;
  name: string;
  cost: number;
  traits: string[];
  imageUrl: string;
}

export interface TraitMetadata {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ItemMetadata {
  id: string;
  name: string;
  imageUrl: string;
}

export interface MetadataResponse {
  season: number;
  units: UnitMetadata[];
  traits: TraitMetadata[];
  items: ItemMetadata[];
}
