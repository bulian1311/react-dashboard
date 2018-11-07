import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Context from '../store/Context';
import Item from './Item';

const styles = theme => ({});

class ProductList extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {store => {
          return store.products.map(product => {
            return (
              <Item
                key={product.url}
                title={product.title}
                description={product.description}
              />
            );
          });
        }}
      </Context.Consumer>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);
