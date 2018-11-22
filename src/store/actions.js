import { SIGNIN, LOGIN, PASSWORD, SEARCH_CHANGE, LOAD_MORE } from './types';

const actions = {
  signin: () => {
    return { type: SIGNIN };
  },

  logout: () => {
    return { type: SIGNIN };
  },

  login: value => {
    return {
      type: LOGIN,
      payload: value
    };
  },

  password: value => {
    return {
      type: PASSWORD,
      payload: value
    };
  },

  searchChange: value => {
    return {
      type: SEARCH_CHANGE,
      payload: value
    };
  },

  loadMore: () => {
    return { type: LOAD_MORE };
  }
};

export default actions;
