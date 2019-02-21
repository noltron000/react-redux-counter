import { INCREMENT, DECREMENT, RESET } from '../actions/index.js'

const defaultState = 99

const counterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return state += 1;
		case DECREMENT:
			return state -= 1;
		case RESET:
			return defaultState;
		default:
			return state;
	}
}

export default counterReducer
