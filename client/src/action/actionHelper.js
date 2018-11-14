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

