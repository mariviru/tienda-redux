import {
  ADD_TO_LIST,
  DELETE_FROM_LIST,
} from '../constants';

const initialState = {
  productList: [{
      element: 'patatas',
      id: 0,
    },
    {
      element: 'cebollas',
      id: 1,
    },
    {
      element: 'huevos',
      id: 2,
    },
    {
      element: 'lechuga',
      id: 3,
    },
  ],
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return Object.assign({}, state, {
        productList: state.productList.concat([action.product])
      });
    case DELETE_FROM_LIST:
      return Object.assign({}, state, {
        productList: [].concat(action.product)
      });
    default:
      return state;
  }
}