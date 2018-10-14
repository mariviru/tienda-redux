import { ADD_TO_FAVORITES } from '../constants';

const initialState = {
  favoriteList: [],
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_TO_FAVORITES:
      return Object.assign({}, state, {
        favoriteList: state.favoriteList.concat([action.product])
      });
      default:
      return state;
  }
}