import { asyncState } from '../state'
import { updateObject, updateItemArray } from './reducerHelper'

const viewState = {
	grid: 'grid',
	list: 'list'
}

const initialState = {
	gelatos: [],
	showModal: false,
	showDrawer: false,
	sidebar: false,
	input: false,
	error: '',
	viewMode: viewState.grid
}

export default function app(state=initialState, action){
	switch(action.type){

		case 'GET_GELATOS_REQUEST': {
			return updateObject(state, { asyncState: asyncState.loading })
		}

		case 'GET_GELATOS_SUCCESS':{
			return updateObject(state, {
				gelatos: action.payload.data,
				asyncState: asyncState.loaded
			})
		}

		case 'GET_GELATOS_ERROR':{
			return updateObject(state, { asyncState: asyncState.error, error: action.payload.error })
		}

		case 'UPDATE_GELATO_REQUEST': {
			return updateObject(state, { asyncState: asyncState.loading })
		}

		case 'UPDATE_GELATO_SUCCESS': {
			return updateItemArray(
				state.gelatos, 
				action.payload.id, gelato => {
				return updateObject(gelato, action.payload.data)
			})
		}

		case 'UPDATE_GELATO_ERROR': {
			return updateObject(state, { asyncState: asyncState.error, error: action.payload.error })
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
			return updateObject(state, {asyncState: asyncState.error})
		}

		case 'TOGGLE_MODAL': {
			return updateObject(state, {showModal: !state.showModal})
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
			return updateObject(state, {asyncState: asyncState.idle})
		}

		default: 
			return state
	}
}