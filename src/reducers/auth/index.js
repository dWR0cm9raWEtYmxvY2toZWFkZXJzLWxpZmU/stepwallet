//

import { combineReducers } from 'redux'

const isAuthenticated = ( state = false, action )=>{
    switch(action.type){
	case 'AUTH':
	    return action.reddit;
	default:
	    return state
    }
}

const auth = combineReducers({
    isAuthenticated
})

export default auth
