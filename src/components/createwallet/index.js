
import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText, FormGroup } from 'material-ui/Form'
import { withStyles } from 'material-ui/styles'
import styles from './styles'
import createHistory from 'history/createBrowserHistory'
import Hashes from 'jshashes'
import nacl from 'tweetnacl'
import util from 'tweetnacl-util'

const RMD160 = new Hashes.RMD160()

const history = createHistory()

class CreateWalletModel extends Component{
    state={
	name: '',
	passwd: '',
	repasswd: '',
	prompt: ''
    }
    changeText = (event) =>{
	let key = event.target.id
	this.setState({
	    [key]: event.target.value
	})
    }
    createWallet = async() =>{
	let msg = util.decodeUTF8(this.state.passwd)
	let nonce = nacl.randomBytes(24)
	let key = nacl.randomBytes(32)
	let secretBox = nacl.secretbox(msg, nonce, key)
	let secretBox_b64 = util.encodeBase64(secretBox)
	let seed = nacl.randomBytes(32)
	let keyPair = nacl.sign.keyPair.fromSeed(seed)
	let address = RMD160.hex(util.encodeBase64(keyPair.publicKey))
	let reddit = true
	this.props.dispatch({type:"AUTH",reddit})
	await this.setState({
	    key: util.encodeBase64(key),
	    nonce: util.encodeBase64(nonce),
	    secretBox: secretBox_b64,
	    keyPair: keyPair,
	    address: address
	})
	await localStorage.setItem(this.state.name,JSON.stringify(this.state))
	await localStorage.setItem('auth', this.state.name)
	await alert('创建成功!')
	history.push('/')
	history.go(0)
    }
    render(){
	console.log(localStorage)
	const { classes } = this.props
	return(
	    <FormGroup id="form" className={classes.ctn}>
		<FormControl>
		    <InputLabel htmlFor="name-helper">钱包名称</InputLabel>
		    <Input id="name" onChange={this.changeText} />
		    <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
		</FormControl>
		<FormControl>
		    <InputLabel htmlFor="passwd-helper">密码</InputLabel>
		    <Input id="passwd" type="password" onChange={this.changeText} />
		    <FormHelperText id="passwd-helper-text">Some important helper text</FormHelperText>
		</FormControl>
		<FormControl>
		    <InputLabel htmlFor="repasswd-helper">重复密码</InputLabel>
		    <Input id="repasswd" type="password" onChange={this.changeText} />
		    <FormHelperText id="repasswd-helper-text">Some important helper text</FormHelperText>
		</FormControl>
		<Button onClick={()=>this.createWallet()} className={classes.foo}>
		    <Typography>创建钱包</Typography>
		</Button>
	    </FormGroup>
	)
    }
}

export default withStyles(styles)(CreateWalletModel)
