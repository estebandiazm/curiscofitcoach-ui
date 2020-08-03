import {subscribeNewsReducer} from './reducers'
import * as reducers from '../ducks'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import services from '../services';

export const rootReducer = combineReducers({
    subscribeNews: subscribeNewsReducer,
    ...reducers,
    form: formReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(services)))