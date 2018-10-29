// Use this if you need one level action
export const makeManualActionCreator = (type, ...actionNames) => (...actionValue) => {
	const action = { type, payload: {} }
	actionNames.forEach( (val, index) => {
		action.payload[val] = actionValue[index]
	})
	return action
}

// I use payload term for data, so I need slightly different action creator
export const makeActionCreator = type => payload => ({type, payload})

