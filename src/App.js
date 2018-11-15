import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import NavDrawer from './components/NavDrawer';
import MainContent from './components/MainContent';
import SignIn from './components/SignIn';
import Context from './store/Context';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    if (!this.context.auth) {
      return <SignIn />;
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <NavDrawer />
        <MainContent />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

App.contextType = Context;

export default withStyles(styles)(App);
