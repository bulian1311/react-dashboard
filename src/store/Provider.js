import React, { Component } from 'react';

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
    const action = await actions.fetchProducts();

    this.dispatch(action);
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
