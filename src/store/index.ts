import {singReducer, subscribeNewsReducer} from './reducers'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    sing: singReducer,
    subscribeNews: subscribeNewsReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))