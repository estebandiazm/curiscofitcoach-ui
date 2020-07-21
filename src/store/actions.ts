import {SING_IN, SUBSCRIBE_NEWS} from "./types";

export interface singInAction {
    type: typeof SING_IN,
    payload: any
}

export interface subscribeNewsAction {
    type: typeof SUBSCRIBE_NEWS,
    payload: any
}

export type AppActions = singInAction | subscribeNewsAction

export const singInAction = (sinIn: boolean): AppActions => ({
    type: SING_IN,
    payload: sinIn
})

export const subscribeNewsAction = (show: boolean, email: string): AppActions => ({
    type: SUBSCRIBE_NEWS,
    payload: {
        show, email
    }
})