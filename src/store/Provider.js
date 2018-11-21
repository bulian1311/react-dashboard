import React, { Component } from 'react';
import axios from 'axios';

import Context from './Context';
import reducer from './reducer';
import actions from './actions';

class Provider extends Component {
  state = {
    login: '',
    password: '',
    token: '',
    products: null,
    visible: 15,
    searchQuery: '',
    auth: false
  };

  dispatch = action => {
    this.setState(state => reducer(state, action));
  };

  async componentWillMount() {
    try {
      const res = await axios.get('http://magmer-api.herokuapp.com/product');
      this.setState({ products: res.data });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return (
      <Context.Provider
        value={{ state: this.state, dispatch: this.dispatch, actions: actions }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
