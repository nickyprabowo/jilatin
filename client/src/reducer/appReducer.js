import { asyncState } from '../state'
import { updateObject, updateItemArray } from './reducerHelper'

const viewState = {
	grid: 'grid',
	list: 'list'
}

const initialState = {
	gelatos: [],
	modalActive: '',
	message: '',
	viewMode: viewState.grid,
	selectedItem: '',
	cardDetail: false
}

export default function app(state=initialState, action){
	switch(action.type){

		case 'GET_GELATOS_REQUEST': {
			return updateObject(state, { asyncState: asyncState.loading })
		}

		case 'GET_GELATOS_SUCCESS':{
			return updateObject(state, {
				gelatos: action.payload.data,
				asyncState: asyncState.loaded,
				message: action.payload.message
			})
		}

		case 'GET_GELATOS_ERROR':{
			return updateObject(state, { asyncState: asyncState.error, message: action.payload.error })
		}

		case 'UPDATE_GELATO_REQUEST': {
			return updateObject(state, { asyncState: asyncState.loading })
		}

		case 'UPDATE_GELATO_SUCCESS': {
			console.log(action.payload)
			const updatedArray = updateItemArray(
				state.gelatos, 
				action.payload.data.id, 
				gelato => updateObject(gelato, action.payload.data)
			)

			return updateObject(state, { gelatos: updatedArray, message: 'Data es krim berhasil diubah' })
		}

		case 'UPDATE_GELATO_ERROR': {
			console.log(action.payload)
			return updateObject(state, { asyncState: asyncState.error, message: action.payload.error })
		}

		case 'ADD_GELATO_REQUEST': {
			return updateObject(state, {asyncState: asyncState.loading})
		}

		case 'ADD_GELATO_SUCCESS': {
			const newGelatos = state.gelatos.concat(action.payload.data)
			return updateObject(state, {
				gelatos: newGelatos, 
				asyncState: asyncState.loaded
			})
		}

		case 'ADD_GELATO_ERROR': {
			return updateObject(state, {asyncState: asyncState.error, message: action.payload.error})
		}

		case 'DELETE_GELATO_REQUEST': {
			return updateObject(state, {asyncState: asyncState.loading})
		}

		case 'DELETE_GELATO_SUCCESS': {
			const newGelatos = state.gelatos.filter( gelato => gelato.id !== action.payload.data.id )
			return updateObject(state, {
				gelatos: newGelatos, 
				asyncState: asyncState.loaded
			})
		}

		case 'DELETE_GELATO_ERROR': {
			return updateObject(state, {asyncState: asyncState.error, message: action.payload.error})
		}

		case 'TOGGLE_MODAL': {
			return updateObject(state, {modalActive: action.payload.modal})
		}

		case 'TOGGLE_DRAWER': {
			return updateObject(state, {showDrawer: !state.showDrawer})
		}

		case 'GRID_VIEW': {
			return updateObject(state, {viewMode: viewState.grid})
		}

		case 'LIST_VIEW': {
			return updateObject(state, {viewMode: viewState.list})
		}

		case 'MAKE_ERROR': {
			const status = state.asyncState === 'error' ? asyncState.loaded : asyncState.error
			return updateObject(state, {asyncState: status})
		}

		case 'CLOSE_MESSAGE': {
			return updateObject(state, {asyncState: '', message: ''})
		}

		case 'SELECT_ITEM': {
			return updateObject(state, {selectedItem: action.payload.id})
		}

		case 'TOGGLE_CARD_DETAIL': {
			return updateObject(state, {cardDetail: !state.cardDetail})
		}

		default: 
			return state
	}
}