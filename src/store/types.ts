export interface SubscribeNewsState {
    email: string
}

export const SUBSCRIBE_NEWS = 'SUBSCRIBE_NEWS';


interface SubscribeNewsAction {
    type: typeof SUBSCRIBE_NEWS,
    payload: any
}

export type SubscribeNewsTypes = SubscribeNewsAction ;