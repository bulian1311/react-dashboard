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
  renderList = store => {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {store.products.slice(0, store.visible).map(product => {
          return (
            <Item
              key={product.title}
              title={product.title}
              description={product.description}
            />
          );
        })}
        <Button
          className={classes.button}
          onClick={e => store.dispatch({ type: LOAD_MORE })}
        >
          Загрузить еще...
        </Button>
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

  render() {
    return (
      <Context.Consumer>
        {store => {
          return (
            <React.Fragment>
              {store.products ? this.renderList(store) : this.renderLoading()}
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
