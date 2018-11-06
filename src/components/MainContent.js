import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ProductList from './ProductList';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

const MainContent = props => {
  const { classes } = props;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductList} />
      </Switch>
    </main>
  );
};

MainContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContent);
