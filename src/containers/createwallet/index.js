
import React, { Component } from 'react'
import CreateWalletModel from '../../components/createwallet'
import { connect } from 'react-redux'

class CreateWallet extends Component{
    render(){
	const { dispatch, auth } = this.props
	return(
	    <CreateWalletModel dispatch={dispatch} auth={auth}/>
	)
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(CreateWallet)
