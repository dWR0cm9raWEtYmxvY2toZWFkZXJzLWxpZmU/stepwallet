//auth

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthModel from '../../components/auth'

class Auth extends Component {
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
	console.log(localStorage)
        if (localStorage.auth) {
            return (
                <Redirect to={from}/>
            )
        }
        return (
	    <AuthModel />
        )
    }
}

const mapStatesToProps = state => ({
    auth: state.auth
})

export default connect(mapStatesToProps)(Auth)
