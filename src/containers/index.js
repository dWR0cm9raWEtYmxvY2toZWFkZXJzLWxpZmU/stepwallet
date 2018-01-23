
//entrance.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainModel from '../components'

class Main extends Component{
    render(){
	const { dispatch } = this.props
	const top = reddit => {
	    let action = {
		type: 'TOP',
		reddit
	    }
	    dispatch(action)
	}
	const right = reddit => {
	    let action = {
		type: 'RIGHT',
		reddit
	    }
	    dispatch(action)
	}
	const settings = reddit => {
	    let action = {
		type: 'TOP',
		reddit
	    }
	    dispatch(action)
	}
	return(
	    <MainModel
		top={ top } right={ right } 
		props={this.props} settings={settings}
	    />
	)
    }
}

const mapPropsToStates = state => ({
    drawer: state.drawer,
    currency: state.currency
})

export default connect(mapPropsToStates)(Main)
