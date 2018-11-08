import { getGelatos, addGelato, getGelatosAsync } from '../api/gelatoAPI'
import { makeActionCreator } from './actionHelper'

const fetchGelatosRequest = makeActionCreator('GET_GELATOS_REQUEST')
const fetchGelatosSuccess = makeActionCreator('GET_GELATOS_SUCCESS')
const fetchGelatosError = makeActionCreator('GET_GELATOS_ERROR')
const addGelatoRequest = makeActionCreator('ADD_GELATO_REQUEST')
const addGelatoSuccess = makeActionCreator('ADD_GELATO_SUCCESS')
const addGelatoError = makeActionCreator('ADD_GELATO_ERROR')
const onCloseMessage = makeActionCreator('CLOSE_MESSAGE')

export function fetchGelatos(){
	return async function(dispatch){
		dispatch(fetchGelatosRequest())

		/*getGelatos()
			.then(result => result.json())
			.then(data => dispatch(fetchGelatosSuccess({data})))
			.catch(error => {
				
		})*/

		// Let's try to use Async Await to simplify Promise
		try{
			const response = await getGelatos()
			const data = await response.json()
			dispatch(fetchGelatosSuccess({data}))
		}catch(error){
			dispatch(fetchGelatosError({error}))
		}
	}
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

export const createGelato = data => dispatch => {
	dispatch(addGelatoRequest())
	
	addGelato(data)
	.then(result => result.json())
	.then(data => {
		dispatch(addGelatoSuccess({data}))
		dispatch(toggleModal())
	})
	.catch(error => {
		dispatch(addGelatoError({error}))
	})
}

export const gridView = () => dispatch => dispatch({type: 'GRID_VIEW'})

export const listView = () => dispatch => dispatch({type: 'LIST_VIEW'})

export const makeError = () => dispatch => dispatch({type: 'MAKE_ERROR'})

export const closeMessage = () => dispatch => dispatch(onCloseMessage())