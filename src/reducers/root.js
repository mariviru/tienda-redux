import { combineReducers } from 'redux';

import product_list from './product_list';
import cart_list from './cart_list';
import favorites_list from './favorites_list';

const rootReducer = combineReducers({
  product_list,
  cart_list,
  favorites_list,
})

export default rootReducer