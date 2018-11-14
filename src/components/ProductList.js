import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import Context from '../store/Context';
import Item from './Item';
import { LOAD_MORE } from '../store/types';

const styles = theme => ({
  button: {
    width: '100%',
    marginTop: 10
  }
});

class ProductList extends React.Component {
  renderList = (store, data) => {
    let products = [];

    if (data) {
      products = data;
    } else {
      products = store.products;
    }

    const { classes } = this.props;
    return (
      <React.Fragment>
        {products.slice(0, store.visible).map(product => {
          return (
            <Item
              key={product.title}
              title={product.title}
              description={product.description}
            />
          );
        })}

        {products.length > 15 ? (
          <Button
            className={classes.button}
            onClick={e => store.dispatch({ type: LOAD_MORE })}
          >
            Загрузить еще...
          </Button>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  };

  renderLoading = () => {
    return (
      <React.Fragment>
        <LinearProgress />
      </React.Fragment>
    );
  };

  renderSearch = store => {
    const query = store.searchQuery.toLowerCase();

    const searchData = store.products.filter(product => {
      const title = product.title.toLowerCase();
      return title.includes(query);
    });

    return this.renderList(store, searchData);
  };

  render() {
    return (
      <Context.Consumer>
        {store => {
          return (
            <React.Fragment>
              {store.products
                ? store.searchQuery
                  ? this.renderSearch(store)
                  : this.renderList(store)
                : this.renderLoading()}
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);
