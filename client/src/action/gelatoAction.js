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
/* TOGGLE CARD DETAIL*/
const onCardDetail = makeActionCreator('TOGGLE_CARD_DETAIL')

export function fetchGelatos(){
	return async function(dispatch){
		dispatch(fetchGelatosRequest())

		// Let's try to use Async Await to simplify Promise
		try{
			const response = await getGelatos()
			const result = await response.json()
			if(response.ok) {
				dispatch(fetchGelatosSuccess({data: result.data, message: result.message}))
			}else{
				return Promise.reject(result)
			}
		}catch(error){
			dispatch(fetchGelatosError({error: error.message}))
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
		.then(response => {
			if(!response.ok){
				return Promise.reject(response.json())
			}else{
				return response.json()
			}
		})
		.then(result => {
			dispatch(addGelatoSuccess({data: result.data, message: result.message}))
			dispatch(toggleModal())
		})
		.catch(error => {
			dispatch(addGelatoError({error: error.message}))
			dispatch(toggleModal())
		})
}

export const updateGelato = data => async dispatch => {
	dispatch(editGelatoRequest())

	try{
		const response = await saveGelato(data)
		const json = await response.json()
		console.log(json)
		if(response.ok) {
			dispatch(editGelatoSuccess({data: json.data}))
			if(json.success) dispatch(toggleModal())
		}

		throw new Error(json)

	}catch(error){
		console.log(error.message)
		dispatch(editGelatoError({error: error.message}))
		dispatch(toggleModal())
	}
}

export const deleteGelato = id => async dispatch => {
	dispatch(deleteGelatoRequest())

	try{
		const response = await removeGelato(id)
		const json = await response.json()
		if(response.ok) {
			dispatch(deleteGelatoSuccess({data: json}))
			dispatch(toggleModal())
		}
		
		return Promise.reject(json)
				
	}catch(error){
		dispatch(deleteGelatoError({error: error.message}))
		dispatch(toggleModal())
	}
}

export const gridView = () => dispatch => dispatch({type: 'GRID_VIEW'})

export const listView = () => dispatch => dispatch({type: 'LIST_VIEW'})

export const makeError = () => dispatch => dispatch({type: 'MAKE_ERROR'})

export const closeMessage = () => dispatch => dispatch(onCloseMessage())

export const selectItem = (id='') => dispatch => dispatch(chooseItem({id}))

export const toggleCardDetail = () => dispatch => dispatch(onCardDetail())