export interface PokemonType {
  name: String | string | undefined;
  url: String | string;
}

export interface NamedAPIResource extends PokemonType {}

export interface PokemonKindType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonInfoType {
   id: number;
   name: string;
   base_experience: number;
   height: number;
   is_default: boolean;
   order: number;
   weight: number;
   abilities: PokemonAbility[];
   forms: NamedAPIResource[];
   game_indices: VersionGameIndex[];
   held_items: PokemonHeldItem[];
   location_area_encounters: string;
   moves: PokemonMove[];
   sprites: PokemonSprites;
   species: NamedAPIResource;
   stats: PokemonStat[];
   types: PokemonKindType[];
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other?: {
      [key in string]?: {
          [spriteName in string]?: string | null;
      };
  };
  versions?: {
      [version in string]?: {
          [gameTitle in string]?: {
              [spriteName in string]?: string;
          };
      };
  };
}

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}


export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface Parameters extends Record<string, string> {
  offset: string;
  limit: string;
}

export interface AbilityEffectType {
  effect: string;
  short_effect: string;
  language: {
    name: string;
    url: string;
  }
}