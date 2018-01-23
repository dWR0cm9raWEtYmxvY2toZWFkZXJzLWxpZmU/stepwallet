//

import React, { Component } from 'react'
import SettingsModel from '../../components/settings'
import { connect } from 'react-redux'

class Settings extends Component{
    render(){
	const { drawer, dispatch } = this.props
	const settings = reddit =>{
	    const action = {
		type: 'TOP',
		reddit
	    }
	    dispatch(action)
	}
	return(
	    <SettingsModel settings={settings} drawer={drawer}/>
	)
    }
}

const mapStatesToProps = state =>({
    drawer: state.drawer
})

export default connect(mapStatesToProps)(Settings)
