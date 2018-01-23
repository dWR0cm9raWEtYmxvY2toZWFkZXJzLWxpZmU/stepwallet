
//drawer reducer
import { combineReducers } from 'redux'


const top = ( state = false, action )=>{
    switch(action.type){
	case 'TOP':
	    return action.reddit
	default:
	    return state
    }
}

const right = ( state = false, action )=>{
    switch(action.type){
	case 'RIGHT':
	    return action.reddit
	default:
	    return state
    }
}

const drawer = combineReducers({
    top, right
})

export default drawer
