import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import Context from '../store/Context';
import Product from './Product';
import { LOAD_MORE } from '../store/types';

const styles = theme => ({
  button: {
    width: '100%',
    marginTop: 10
  }
});

class ProductList extends React.Component {
  renderList = data => {
    let products = [];

    if (data) {
      products = data;
    } else {
      products = this.context.products;
    }

    return (
      <React.Fragment>
        {products.slice(0, this.context.visible).map(product => {
          return <Product key={product.title} product={product} />;
        })}

        {this.renderMoreButton(products)}
      </React.Fragment>
    );
  };

  renderMoreButton = products => {
    const { classes } = this.props;

    if (products.length > 15) {
      return (
        <Button
          className={classes.button}
          onClick={e => this.context.dispatch({ type: LOAD_MORE })}
        >
          Загрузить еще...
        </Button>
      );
    }
    return '';
  };

  renderLoading = () => {
    return (
      <React.Fragment>
        <LinearProgress />
      </React.Fragment>
    );
  };

  renderSearch = () => {
    const query = this.context.searchQuery.toLowerCase();

    const searchData = this.context.products.filter(product => {
      const title = product.title.toLowerCase();
      return title.includes(query);
    });

    return this.renderList(searchData);
  };

  render() {
    console.log(this.context);
    return (
      <React.Fragment>
        {this.context.products
          ? this.context.searchQuery
            ? this.renderSearch()
            : this.renderList()
          : this.renderLoading()}
      </React.Fragment>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

ProductList.contextType = Context;

export default withStyles(styles)(ProductList);
