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
