// Use this if you need one level action
/*
	{
		type: 'ACTION_NAME',
		name: 'ice cream',
		quantity: 25
	}
*/
export const makeManualActionCreator = (type, ...actionNames) => (...actionValue) => {
	const action = { type, payload: {} }
	actionNames.forEach( (val, index) => {
		action.payload[val] = actionValue[index]
	})
	return action
}

// I use payload term for data, so I need slightly different action creator
/*
	{
		type: 'ACTION_NAME',
		payload: {
			name: 'ice cream',
			quantity: 25
		}
	}
*/
export const makeActionCreator = type => payload => ({type, payload})

