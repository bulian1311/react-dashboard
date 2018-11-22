import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import Context from '../store/Context';
import Product from './Product';

const styles = theme => ({
  button: {
    width: '100%',
    marginTop: 10
  }
});

class ProductList extends React.Component {
  renderList = data => {
    const { state } = this.context;
    let products = [];

    if (data) {
      products = data;
    } else {
      products = state.products;
    }

    return (
      <React.Fragment>
        {products.slice(0, state.visible).map(product => {
          return <Product key={product.title} product={product} />;
        })}

        {this.renderMoreButton(products)}
      </React.Fragment>
    );
  };

  renderMoreButton = products => {
    const { classes } = this.props;
    const { dispatch, actions } = this.context;

    if (products.length > 15) {
      return (
        <Button
          className={classes.button}
          onClick={e => dispatch(actions.loadMore())}
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
    const { state } = this.context;

    const query = state.searchQuery.toLowerCase();

    const searchData = state.products.filter(product => {
      const title = product.title.toLowerCase();
      return title.includes(query);
    });

    return this.renderList(searchData);
  };

  render() {
    const { state } = this.context;
    return (
      <React.Fragment>
        {state.products
          ? state.searchQuery
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
