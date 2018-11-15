import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ImageList from './ImageList';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  price: {
    fontWeight: 'bold'
    //marginLeft: 100
  }
});

const Item = ({ product, classes }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{product.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{product.description}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <Typography className={classes.price}>{product.price}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails>
        <ImageList images={product.images} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Item.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Item);
