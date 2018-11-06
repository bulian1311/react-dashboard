import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    textDecoration: 'none'
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

function NavDrawer(props) {
  const { classes } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link style={{ textDecoration: 'none' }} to="/">
          <ListItem button key="123">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Домой" />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/product">
          <ListItem button key="456">
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Аттракционы" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavDrawer);
