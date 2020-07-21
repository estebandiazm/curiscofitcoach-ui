export interface SingInState {
    singIn: boolean,
    timestamp: number
}

export interface SubscribeNewsState {
    show: boolean,
    email: string
}

export const SING_IN = 'SING_IN';
export const SUBSCRIBE_NEWS = 'SUBSCRIBE_NEWS';

interface SingInAction {
    type: typeof SING_IN,
    payload: any
}

interface SubscribeNewsAction {
    type: typeof SUBSCRIBE_NEWS,
    payload: any
}

export type SingActionTypes = SingInAction ;
export type SubscribeNewsTypes = SubscribeNewsAction ;