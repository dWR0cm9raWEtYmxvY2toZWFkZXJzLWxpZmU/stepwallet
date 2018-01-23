
//Auth model


import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles' 
import styles from './styles'


import createHistory from 'history/createBrowserHistory'
const history =	createHistory()

const route = async(path) =>{
    await history.push(path)
    await history.go(0)
}

class AuthModel extends Component{
    render(){
	const { classes } = this.props
	return(
	    <Grid container className={classes.ctn}>
		<Button onClick={()=>route('/createwallet')} className={classes.btn}>
		    <Typography>创建钱包</Typography>
		</Button>
		<Button onClick={()=>alert('on developing')}className={classes.btn}>
		    <Typography>导入钱包</Typography>
		</Button>		
	    </Grid>
	)
    }
}

export default withStyles(styles)(AuthModel)
