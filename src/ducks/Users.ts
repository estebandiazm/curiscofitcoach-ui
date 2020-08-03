import {Dispatch} from 'redux';
import {IServices} from '../services';

export interface ILogin {
    email: string,
    password: string
}

export interface LoginState {
    authFail: string
}

export default function reducer(state = {}, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return {authFail: action.payload.authFail}
        default:
            return state
    }
}

export const login = ({email, password}: ILogin) =>
    (dispatch: Dispatch, getState: () => any, {auth}: IServices) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => dispatch({
                type: 'LOGIN',
                payload: {
                    authFail: false
                }
            }))
            .catch(err => {
                console.error(err.message)
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        authFail: true
                    }
                })
            })
    }
