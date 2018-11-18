import React, { Component } from 'react';
import axios from 'axios';

import Context from './Context';
import reducer from './reducer';

class Provider extends Component {
  state = {
    products: null,
    visible: 15,
    searchQuery: '',
    auth: false,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentWillMount() {
    try {
      const res = await axios.get('https://magmer-api.herokuapp.com/product');
      this.setState({ products: res.data });
    } catch (err) {
      console.error(err.message);
    }
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + this.state.visible };
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
