export interface UnitMetadata {
  name: string,
  cost: number,
  traits: string[],
  image_url: string
};

export interface TraitMetadata {
  name: string,
  image_url: string,
};

export interface ItemMetadata {
  name: string,
  image_url: string,
};

export interface Metadata {
  season: number;
  units: UnitMetadata[],
  traits: TraitMetadata[],
  items: ItemMetadata[]
};
