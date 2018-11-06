import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Item from './Item';

const styles = theme => ({});

class ProductList extends React.Component {
  state = { products: [] };

  async componentWillMount() {
    try {
      const res = await axios.get('http://magmer-api.herokuapp.com/product');
      this.setState({ products: res.data });
    } catch (err) {
      console.error(err.message);
    }
  }

  listRender() {
    return this.state.products.map(product => {
      return (
        <Item
          key={product.url}
          title={product.title}
          description={product.description}
        />
      );
    });
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{this.listRender()}</div>;
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);
