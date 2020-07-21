import {SingActionTypes, SingInState, SubscribeNewsTypes} from "./types";

const initialState: SingInState = {
    singIn: false,
    timestamp: 0
}

export function singReducer(state = initialState, action: SingActionTypes) {
    switch (action.type) {
        case 'SING_IN':
           return {
                singIn: action.payload,
                timestamp: Date.now()
            }
        default:
            return state
    }
}

export function subscribeNewsReducer(state = {}, action: SubscribeNewsTypes) {
    console.log(action)
    switch (action.type) {
        case 'SUBSCRIBE_NEWS':
            return {
                show: action.payload.show,
                email: action.payload.email
            }
        default:
            return {show: true, email: 'NA'}
    }
}