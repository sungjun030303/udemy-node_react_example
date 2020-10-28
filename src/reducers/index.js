import {combineReducers} from 'redux'
import { reducer as form } from 'redux-form'
import count from './count'
import events from './events'

export default combineReducers({ count ,events, form } )


