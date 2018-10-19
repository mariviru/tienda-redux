import { ADD_TO_CART, DELETE } from '../constants';

const initialState = {
  cartList: [],
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_TO_CART:
      return Object.assign({}, state, {
        cartList: state.cartList.concat([action.product])
      });
      case DELETE:
      console.log('cartList en cart_list', state.cartList)
      return Object.assign({}, state, {
        cartList: state.cartList.concat([action.product])
      });
      default:
      return state;
  }
}