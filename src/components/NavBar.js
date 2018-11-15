import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Context from '../store/Context';
import { SIGNIN } from '../store/types';
import Search from './Search';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  logoutButton: {
    marginLeft: '45%'
  }
});

const NavBar = props => {
  const { classes } = props;

  return (
    <Context.Consumer>
      {context => {
        return (
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Magmer Admin
              </Typography>
              <Search />
              <Button
                onClick={e => context.dispatch({ type: SIGNIN })}
                className={classes.logoutButton}
                color="inherit"
              >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
        );
      }}
    </Context.Consumer>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
