import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    return store.products.slice(0, store.visible).map(product => {
      return (
        <Item
          key={product.title}
          title={product.title}
          description={product.description}
        />
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Context.Consumer>
        {store => {
          return (
            <React.Fragment>
              {this.renderList(store)}
              <Button
                className={classes.button}
                onClick={e => store.dispatch({ type: LOAD_MORE })}
              >
                Загрузить еще...
              </Button>
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
