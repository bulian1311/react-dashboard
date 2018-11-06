import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Item from './Item';

const styles = theme => ({});

class ProductList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Item title="Qwerty" description="xcvvvvvvv xcvvvvvvv" />
      </div>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);
