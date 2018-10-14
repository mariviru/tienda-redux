import { ADD_TO_CART } from '../constants';

const initialState = {
  cartList: [],
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_TO_CART:
      return Object.assign({}, state, {
        cartList: state.cartList.concat([action.product])
      });
      default:
      return state;
  }
}