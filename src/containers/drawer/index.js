
import React, { Component } from 'react'
import DrawerModel from '../../components/drawer'
import { connect } from 'react-redux'

class Drawers extends Component{
    render(){
	const { drawer, dispatch } = this.props
	const currency = reddit =>{
	    const action = {
		type:'TYPE',
		reddit
	    }
	    dispatch(action)
	}
	const top = reddit =>{
	    const action={
		type:'TOP',
		reddit
	    }
	    dispatch(action)
	}
	const right = reddit =>{
	    const action={
		type:'RIGHT',
		reddit
	    }
	    dispatch(action)
	}	
	return(
	    <DrawerModel
		currency={currency} drawer={drawer} right={right} top={top}
	    />
	)
    }
}

const mapStatesToProps = state => ({
    drawer: state.drawer
})

export default connect(mapStatesToProps)(Drawers)
