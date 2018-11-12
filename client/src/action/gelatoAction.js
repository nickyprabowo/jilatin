import { getGelatos, addGelato, getGelatosAsync, saveGelato, removeGelato } from '../api/gelatoAPI'
import { makeActionCreator } from './actionHelper'

/* GET GELATO */
const fetchGelatosRequest = makeActionCreator('GET_GELATOS_REQUEST')
const fetchGelatosSuccess = makeActionCreator('GET_GELATOS_SUCCESS')
const fetchGelatosError = makeActionCreator('GET_GELATOS_ERROR')
/* ADD GELATO */
const addGelatoRequest = makeActionCreator('ADD_GELATO_REQUEST')
const addGelatoSuccess = makeActionCreator('ADD_GELATO_SUCCESS')
const addGelatoError = makeActionCreator('ADD_GELATO_ERROR')
/* EDIT GELATO */
const editGelatoRequest = makeActionCreator('EDIT_GELATO_REQUEST')
const editGelatoSuccess = makeActionCreator('EDIT_GELATO_SUCCESS')
const editGelatoError = makeActionCreator('EDIT_GELATO_ERROR')
/* DELETE GELATO */
const deleteGelatoRequest = makeActionCreator('DELETE_GELATO_REQUEST')
const deleteGelatoSuccess = makeActionCreator('DELETE_GELATO_SUCCESS')
const deleteGelatoError = makeActionCreator('DELETE_GELATO_ERROR')
/* SELECT/DESELECT ITEM */
const chooseItem = makeActionCreator('SELECT_ITEM')
/* CLOSE MESSAGE */
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

export const toggleModal = modal => dispatch => {
	dispatch({
		type: 'TOGGLE_MODAL',
		payload: {
			modal
		}
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

export const updateGelato = data => async dispatch => {
	dispatch(editGelatoRequest())

	try{
		const response = await saveGelato(data)
		const json = await response.json()
		dispatch(editGelatoSuccess({data: json}))
	}catch(error){
		dispatch(editGelatoError({error}))
	}
}

export const deleteGelato = id => async dispatch => {
	dispatch(deleteGelatoRequest())

	try{
		const response = await removeGelato(id)
		const json = await response.json()
		dispatch(deleteGelatoSuccess({data: json}))
	}catch(error){
		dispatch({error})
	}
}

export const gridView = () => dispatch => dispatch({type: 'GRID_VIEW'})

export const listView = () => dispatch => dispatch({type: 'LIST_VIEW'})

export const makeError = () => dispatch => dispatch({type: 'MAKE_ERROR'})

export const closeMessage = () => dispatch => dispatch(onCloseMessage())

export const selectItem = (id='') => dispatch => dispatch(chooseItem({id}))