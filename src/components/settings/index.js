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
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const route = path =>{
    history.push(path)
    history.go(0)
}

const styles = theme =>({
    flex: {
	flex: 1,
    },
    nested: {
	paddingLeft: theme.spacing.unit * 4,
    },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    state = {
	open: false,
    }
    handleClick = () => {
	this.setState({ open: !this.state.open });
    };    
    render() {
	const {  drawer, settings, classes, select } = this.props;
	const WalletList = props =>{
	    let list = []
	    for (var item in localStorage) {
		if (localStorage.hasOwnProperty(item)){
		    try{
			JSON.parse(localStorage[item])
			list.push(item);		    
		    }catch(err){}
		}
	    }
	    const lists = list.map((item)=>{
		const _select = async() =>{
		    await select(item)
		    await settings(false)
		}
		return(
		    <div key={item}>
			<ListItem button className={classes.nested} onClick={()=>{_select(item)}}>
			    <ListItemText inset primary={item} />
			</ListItem>
			<Divider />
		    </div>
		)}
	    )
	    return(<div>{lists}</div>)
	}
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
			<ListItem button onClick={()=>route('/createwallet')}>
			    <ListItemText primary="create wallet" secondary="Earth" />
			</ListItem>
			<Divider />
			<ListItem button>
			    <ListItemText primary="import wallet" secondary="Mercury" />
			</ListItem>
			<Divider />
			<ListItem button onClick={this.handleClick}>
			    <ListItemText primary="change wallet" secondary="Pluto" />
			    {this.state.open ? <ExpandLess /> : <ExpandMore />}
			</ListItem><Divider />
			<Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
			    <List disablePadding>
				<WalletList />
			    </List>
			</Collapse>
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
