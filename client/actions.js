export const actionOne = () => ({
	type: 'ACTION_ONE',
})

export const actionTwo = () => ({
	type: 'ACTION_TWO',
})

export const actionThree = (data) => ({
	type: 'ACTION_THREE',
	data
})

//"Second-half" actions don't have to be exported (they're only called from
//here). It doesn't hurt to export them, though, if you prefer consistency.
const fetchSuccess = (data, message) => ({
	type: 'FETCH_SUCCESS',
	data,
	message
})

//A single generic failure message can be used for all network failures,
//unless you specifically need to do something when a particular one fails.
const fetchFailure = (what, error) => ({
	type: 'FETCH_FAILURE',
	what, error
})

export const fetchOne = () => dispatch => {
	return fetch('/hello').then(response => {
		if (!response.ok) throw(new Error(response.statusText));
		return response.json();
	}).then(data =>
		dispatch(fetchSuccess(data.message))
	).catch(error =>
		dispatch(fetchFailure('fetchOne', error))
	);
}
