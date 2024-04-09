import { createContext } from 'react';
import { Product } from '../lib';

// export type CartProduct = {
//   item: Product;
//   quantity: number;
// };
// export type CartValues = {
//   cart: CartProduct[];
//   addToCart: (item: Product) => void;
// };
// export const CartContext = createContext<CartValues>({
//   cart: [],
//   addToCart: () => undefined,
// });

// in the cart, we want the item as well as the quantity of that item
export type CartProduct = {
  item: Product;
  quantity: number;
};

// set the types for the createContext function
export type CartValues = {
  cart: CartProduct[];
  addToCart: (item: Product) => void;
};
// use createContext with the default values of a cart with an empty array, and a function addToCart to handle items added to the cart
export const CartContext = createContext<CartValues>({
  cart: [],
  addToCart: () => undefined,
});
