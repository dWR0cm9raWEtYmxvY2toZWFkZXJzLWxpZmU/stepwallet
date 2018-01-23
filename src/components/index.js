import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Grid'
import styles from './styles'
import { Cached, List, Send, CameraAlt, CreditCard } from 'material-ui-icons'
import Drawers from '../containers/drawer'
import Settings from '../containers/settings'

const MainModel = props =>{
    const { classes, settings } = props;
    return (
	<Grid className={classes.ctn}>
	    <Drawers />
	    <Settings />
	    <Grid className={classes.row}>
		<Button onClick={()=>settings(true)}>
		    <List/>
		</Button>
		<Grid className={classes.avatar}><Button fab>
		    <Avatar alt="indeed avatar" src="/avatar.jpg" className={classes.bigAvatar}/>
		</Button>
		<Typography style={{marginTop:16}}>{localStorage.auth}</Typography>
		</Grid>

		<Grid  container className={classes.bottom}>
		    <Grid item>
			<Button>
			    <Typography align="center" className={classes.edge}>
				<Typography
				    style={{display:'flex',flexDirection:'row',marginBottom:2}}>
				    <Typography style={{fontSize:12,marginRight:2}}>≈</Typography>
				    <Typography style={{fontSize:28}}>0</Typography>
				</Typography>
				<Typography style={{fontSize:8}}>{props.props.currency.type}(¥)</Typography>
			    </Typography></Button>
		    </Grid>
		    <Grid item>
			<Button onClick={()=>props.right(true)} ><Typography align="center" className={classes.edge}>
			    <Cached style={{width:36,height:36}}/>
			</Typography></Button>
		    </Grid>		    
		</Grid>
	    </Grid>
	    <Grid className={classes.tools}>
		<Grid item ><Button><CameraAlt className={classes.tool} /></Button></Grid>
		<Grid item ><Button><CreditCard className={classes.tool} /></Button></Grid>
		<Grid item ><Button><Send className={classes.tool} /></Button></Grid>
	    </Grid>
	</Grid>
    );
}

MainModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainModel);
