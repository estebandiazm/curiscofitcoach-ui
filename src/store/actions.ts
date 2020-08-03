import {SUBSCRIBE_NEWS, SubscribeNewsState} from './types';

export interface subscribeNewsAction {
    type: typeof SUBSCRIBE_NEWS,
    payload: any
}

export type AppActions = subscribeNewsAction


export const subscribeNewsAction = (subscribeNewsState: SubscribeNewsState): AppActions => ({
    type: SUBSCRIBE_NEWS,
    payload: subscribeNewsState
})