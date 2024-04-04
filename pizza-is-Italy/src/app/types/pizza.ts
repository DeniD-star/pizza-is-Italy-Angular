import { User } from "./user";

export interface Pizza{
  name: string,
  type?: string,
  imageUrl: string,
  ingredients: string,
  notes: string,
  price: number,
  canBeEdit?: boolean,
  _id?: string,
  _ownerId?: string,
  _createdOn?: number
}

export interface Cart {
  item: Pizza[];
  intemId: string;
  quantity: number;
  userId: User;
}