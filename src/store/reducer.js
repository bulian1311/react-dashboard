import {
  LOAD_MORE,
  SEARCH_CHANGE,
  SIGNIN,
  LOGIN,
  PASSWORD,
  FETCH_PRODUCTS
} from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case LOAD_MORE:
      return { ...state, visible: state.visible + 15 };
    case SEARCH_CHANGE:
      return { ...state, searchQuery: action.payload };
    case SIGNIN:
      return { ...state, auth: !state.auth };
    case LOGIN:
      return { ...state, login: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default reducer;
