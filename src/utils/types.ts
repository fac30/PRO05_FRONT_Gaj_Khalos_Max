export interface BaseEntity {
  id: number;
  createdAt: string;
}

export interface Pokemon extends BaseEntity {
  name: string;
  imageUrl: string;
  apiUrl: string;
  likes: number;
}

export interface PokemonCollection {
  pokemon: Pokemon;
}

export interface Collection extends BaseEntity {
  name: string;
  themeId: number;
  passwordHash: string;
  likes: number;
  pokemonCollections: PokemonCollection[];
}
