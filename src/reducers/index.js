
// main reducer

import { combineReducers } from 'redux'
import drawer from './drawer'
import auth from './auth'
import currency from './currency'

const reducer = combineReducers({
    drawer, auth, currency
})

export default reducer
