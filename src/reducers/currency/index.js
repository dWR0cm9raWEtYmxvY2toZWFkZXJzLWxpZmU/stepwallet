
import { combineReducers } from 'redux'

const type = ( state = "ALL", action ) =>{
    switch(action.type){
	case 'TYPE':
	    return action.reddit
	default:
	    return state
    }
}


const currency = combineReducers({
    type
})

export default currency
