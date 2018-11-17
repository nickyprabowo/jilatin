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
const editGelatoRequest = makeActionCreator('UPDATE_GELATO_REQUEST')
const editGelatoSuccess = makeActionCreator('UPDATE_GELATO_SUCCESS')
const editGelatoError = makeActionCreator('UPDATE_GELATO_ERROR')
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
			.catch(error => dispatch(fetchGelatosError({error}))
				
		})*/

		// Let's try to use Async Await to simplify Promise
		try{
			const response = await getGelatos()
			if(response.ok) {
				const data = await response.json()
				dispatch(fetchGelatosSuccess({data}))
				dispatch(toggleModal())
			}else{
				dispatch(fetchGelatosError({error: 'Network Error'}))
				dispatch(toggleModal())
			}
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
		dispatch(toggleModal())
	})
}

export const updateGelato = data => async dispatch => {
	dispatch(editGelatoRequest())

	try{
		const response = await saveGelato(data)
		if(response.ok) {
			const json = await response.json()
			dispatch(editGelatoSuccess({data: json.data}))
			if(json.success) dispatch(toggleModal())
		}else{
			dispatch(editGelatoError({error: 'Network Error'}))
			dispatch(toggleModal())
		}
	}catch(error){
		dispatch(editGelatoError({error}))
	}
}

export const deleteGelato = id => async dispatch => {
	dispatch(deleteGelatoRequest())

	try{
		const response = await removeGelato(id)
		if(response.ok) {
			const json = await response.json()
			dispatch(deleteGelatoSuccess({data: json}))
			dispatch(toggleModal())
		}else{
			dispatch(deleteGelatoError({error: 'Network Problem'}))
			dispatch(toggleModal())
		}		
	}catch(error){
		dispatch(deleteGelatoError({error}))
	}
}

export const gridView = () => dispatch => dispatch({type: 'GRID_VIEW'})

export const listView = () => dispatch => dispatch({type: 'LIST_VIEW'})

export const makeError = () => dispatch => dispatch({type: 'MAKE_ERROR'})

export const closeMessage = () => dispatch => dispatch(onCloseMessage())

export const selectItem = (id='') => dispatch => dispatch(chooseItem({id}))