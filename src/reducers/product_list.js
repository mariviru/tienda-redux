import { ADD_TO_LIST } from '../constants';

const initialState = {
  productList: ['patatas', 'cebollas', 'huevos', 'lechuga'],
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return Object.assign({}, state, {
        productList: state.productList.concat([action.product.product])
      });
      default:
      return state;
  }
}