import { ADD_TO_LIST, ADD_TO_CART, ADD_TO_FAVORITES } from './constants';

export function addProductToList(product) {
  return {
    type: ADD_TO_LIST,
    product,
  };
}

export function addProductToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function addProductToFavorites(product) {
  return {
    type: ADD_TO_FAVORITES,
    product,
  }
}