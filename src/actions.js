import { 
  ADD_TO_LIST, 
  ADD_TO_CART, 
  ADD_TO_FAVORITES, 
  DELETE_FROM_CART, 
  DELETE_FROM_FAVORITES, 
  DELETE_FROM_LIST 
} from './constants';

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
  };
}

export function deleteProductsFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    product,
  };
}

export function deleteProductsFromFavorites(product) {
  return {
    type: DELETE_FROM_FAVORITES,
    product,
  };
}

export function deleteProductsFromList(product) {
  return {
    type: DELETE_FROM_LIST,
    product,
  };
}