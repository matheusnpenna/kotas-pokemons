interface PokemonType {
  name: String;
  url: String | string;
}

interface PokemonInfoType {
  name: String;
  url: String | string;
  id: string | number;
}


export type {
  PokemonType,
  PokemonInfoType
}
