import axios from 'axios';
import {
  SIGNIN,
  LOGIN,
  PASSWORD,
  SEARCH_CHANGE,
  LOAD_MORE,
  FETCH_PRODUCTS
} from './types';

const actions = {
  signin: (login, password) => {
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

  fetchProducts: async () => {
    let products;

    try {
      const res = await axios.get('http://magmer-api.herokuapp.com/product');
      products = res.data;
    } catch (err) {
      console.error(err.message);
    }

    return { type: FETCH_PRODUCTS, payload: products };
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
