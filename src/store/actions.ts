import {SING_IN} from "./types";

export interface singInAction {
    type: typeof SING_IN,
    payload: any
}

export type AppActions = singInAction

export const singInAction = (sinIn: boolean): AppActions => ({
    type: SING_IN,
    payload: sinIn
})