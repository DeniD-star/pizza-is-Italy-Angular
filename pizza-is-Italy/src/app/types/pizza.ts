import { User } from "./user";

export interface Pizza {
  name: string,
  type?: string,
  imageUrl: string,
  ingredients: string,
  notes: string,
  price: number,
  quantity?: number;
  dateOrder?: number;
  canBeEdit?: boolean,
  _id?: string,
  _ownerId?: string,
  _createdOn?: number
}

export interface Drink extends Pizza {
  singleQuantity: number,
  added: boolean
}

export interface Dessert extends Pizza {
  singleQuantity: number,
  added: boolean
}

export interface Cart {
  _id: string;
  _ownerId?: string;
  dateOrder?: number;
  item: Pizza;
  itemId: string,
  intemId: string;
  quantity: number;
  userId: User;
}

export interface Order {
  _ownerId: string
  currentOrder: Cart[]
  _createdOn: number
  _id: string
}

export interface Comments {
  author: string;
  pizzaId: string;
  text: string;
  user: User;
}

export interface Likes {
  author: string;
  pizzaId: string;
  _createdOn: number;
  _id: string;
  _ownerId: string;
}