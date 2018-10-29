import { getGelatos } from '../api/gelatoAPI'
import { makeActionCreator } from './actionHelper'

const fetchGelatosRequest = makeActionCreator('GET_GELATOS_REQUEST')
const fetchGelatosSuccess = makeActionCreator('GET_GELATOS_SUCCESS')
const fetchGelatosError = makeActionCreator('GET_GELATOS_ERROR')
const addGelatoRequest = makeActionCreator('ADD_GELATO_REQUEST')
const addGelatoSuccess = makeActionCreator('ADD_GELATO_SUCCESS')
const addGelatoError = makeActionCreator('ADD_GELATO_ERROR')

export const fetchGelatos = () => dispatch => {

	dispatch(fetchGelatosRequest())

	getGelatos()
		.then(result => result.json())
		.then(data => dispatch(fetchGelatosSuccess({data})))
		.catch(error => {
			dispatch(fetchGelatosError({error}))
		})

}

export const toggleModal = () => dispatch => {
	dispatch({
		type: 'TOGGLE_MODAL'
	})
}

export const toggleDrawer = () => dispatch => {
	dispatch({
		type: 'TOGGLE_DRAWER'
	})
}

export const toggleSidebar = () => dispatch => {
	dispatch({
		type: 'TOGGLE_SIDEBAR'
	})
}

export const toggleInput = () => dispatch => {
	dispatch({
		type: 'TOGGLE_INPUT'
	})
}

export const addGelato = (data) => dispatch => {
	dispatch(addGelatoRequest())

	const url = "http://localhost:5000/api/gelato"
	fetch(url, {
		method: 'POST',
		body: data
	})
	.then(result => result.json())
	.then(data => {
		dispatch(addGelatoSuccess({data}))
		dispatch(toggleModal())
	})
	.catch(error => {
		dispatch(addGelatoError({error}))
	})
}
