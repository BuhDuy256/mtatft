export interface UnitMetadata {
  id: string;
  name: string;
  cost: number;
  traits: string[];
  image_url: string;
}

export interface TraitMetadata {
  id: string;
  name: string;
  image_url: string;
}

export interface ItemMetadata {
  id: string;
  name: string;
  image_url: string;
}

export interface Metadata {
  season: number;
  units: UnitMetadata[];
  traits: TraitMetadata[];
  items: ItemMetadata[];
}
