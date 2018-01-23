import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

const styles = {
    flex: {
	flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    render() {
	const {  drawer, settings } = this.props;
	return (
	    <div>
		<Dialog
		    fullScreen
		    open={drawer.top}
		    onClose={()=>settings(false)}
		    transition={Transition}
		>
		    <Typography align="right" style={{marginTop:5}}>
		    <IconButton color="inherit" onClick={()=>settings(false)} aria-label="Close">
			<CloseIcon />
		    </IconButton></Typography>
		    <List>
			<Divider />
			<ListItem button>
			    <ListItemText primary="create wallet" secondary="Titania" />
			</ListItem>
			<Divider />
			<ListItem button>
			    <ListItemText primary="import wallet" secondary="Tethys" />
			</ListItem>
			<Divider />
			<ListItem button>
			    <ListItemText primary="change wallet" secondary="Titania" />
			</ListItem>						
			<Divider />
		    </List>
		</Dialog>
	    </div>
	);
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
