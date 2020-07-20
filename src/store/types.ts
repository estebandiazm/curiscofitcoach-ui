export interface SingInState {
    singIn: boolean,
    timestamp: number
}

export const SING_IN = 'SING_IN';

interface SingInAction {
    type: typeof SING_IN,
    payload: any
}

export type SingActionTypes = SingInAction ;