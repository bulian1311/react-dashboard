import React, { Component } from 'react';
import Context from './Context';
import axios from 'axios';

class Provider extends Component {
  state = { products: [] };

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
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
