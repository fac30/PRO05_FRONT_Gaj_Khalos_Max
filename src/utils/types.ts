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

export interface Collection extends BaseEntity {
  name: string;
  themeId: number;
  passwordHash: string;
  likes: number;
  pokemonCollections: Pokemon[];
}
