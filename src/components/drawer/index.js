import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List'

const styles = {
    list: {
	width: 150,
    },
    listFull: {
	width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {

    render() {
	const { classes } = this.props;
	const { drawer, currency, right } = this.props
	
	const sideList = (
	    <div className={classes.list}>
		<List>
		<ListItem button onClick={()=>currency('ALL')}><ListItemText primary="ALL" /></ListItem>
		<ListItem button onClick={()=>currency('BTC')}><ListItemText primary="BTC" /></ListItem>
		<ListItem button onClick={()=>currency('ETH')}><ListItemText primary="ETH" /></ListItem>
		<ListItem button onClick={()=>currency('EOS')}><ListItemText primary="EOS" /></ListItem>
		<ListItem button onClick={()=>currency('MKR')}><ListItemText primary="MKR" /></ListItem>
		<ListItem button onClick={()=>currency('REP')}><ListItemText primary="REP" /></ListItem>
		<ListItem button onClick={()=>currency('LRC')}><ListItemText primary="LRC" /></ListItem>
		</List>
	    </div>
	);

	return (
	    <div>
		<Drawer anchor="right" open={drawer.right} onClose={()=>right(false)}>
		    <div
			tabIndex={0}
			role="button"
			onClick={()=>right(false)}
			onKeyDown={()=>right(false)}
		    >
			{sideList}
		    </div>
		</Drawer>
	    </div>
	);
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
