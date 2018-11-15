import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  }
});

const ImageList = ({ classes, images }) => {
  let cols = 1;
  if (images.length > 1) cols = 4;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={cols}>
        {images.map(image => (
          <GridListTile key={image.url}>
            <img src={image.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ImageList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageList);
