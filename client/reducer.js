//import * as actions from './actions';

const INITIAL_STATE = {
	prop: 'prop',
	data: {}
};

export default function reducer(state = INITIAL_STATE, action={}) {
	switch (action.type) {
		case 'ACTION_ONE':
			return { ...state, prop: 'prop2' };
		case 'ACTION_TWO':
			return { ...state, prop: 'prop3' };
		case 'ACTION_THREE':
			return { ...state, data: action.data };
		case 'FETCH_SUCCESS':
			console.log("Fetch success:", action.message);
			return { ...state, data: action.data };
		case 'REPORT_FAILURE':
			console.error("Failure in " + action.what + ":");
			console.error(action.error);
			break;
		default: break;
	}
	return state;
}
