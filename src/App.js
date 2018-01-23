//

import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom'

import { connect } from 'react-redux'

import Auth from './containers/auth'
import Main from './containers'
import CreateWallet from './containers/createwallet'

class Root extends Component{
    render(){	
	const PrivateRoute = ({ component: Component, ...rest }) => (
	    <Route {...rest} render={props => (
		localStorage.auth ? (
		    <Component {...props}/>
		) : (
		    <Redirect to={{
			pathname: '/auth',
			state: { from: props.location }
		    }}/>
		)
	    )}/>
	)	
	return(
	    <Router>
		<div>
		    <PrivateRoute path="/" exact component={Main}/>
		    <Route path="/auth" component={Auth}/>
		    <Route path="/createwallet" component={CreateWallet} />
		</div>
	    </Router>
	)
    }
}


const mapStatesToProps = state =>({
    auth: state.auth
})

export default connect(mapStatesToProps)(Root)
