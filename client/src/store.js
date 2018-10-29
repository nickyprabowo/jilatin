import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combinedReducers from './reducer'

const middleware = [thunk]

const store = createStore(
	combinedReducers, 
	compose(
		applyMiddleware(...middleware)
	)
)

export default store