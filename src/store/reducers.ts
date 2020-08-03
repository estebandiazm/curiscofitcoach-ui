import {SubscribeNewsTypes} from './types';


export function subscribeNewsReducer(state = {email: 'NA'}, action: SubscribeNewsTypes) {
    switch (action.type) {
        case 'SUBSCRIBE_NEWS':
            return {
                email: action.payload.email
            }
        default:
            return state
    }
}