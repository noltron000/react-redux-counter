import { combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer.jsx'

export default combineReducers({
	count: counterReducer
});
