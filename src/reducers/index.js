import { combineReducers } from 'redux'
import counterReducer from './counterReducer.js'

const reducers = combineReducers({
	count: counterReducer
});

export default reducers
