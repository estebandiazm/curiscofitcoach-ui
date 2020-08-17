import {AnyAction, Dispatch} from 'redux';
import {IServices} from '../services';

const START = 'register/fetch-start'
const SUCCESS = 'register/fetch-success'
const ERROR = 'register/fetch-error'

export interface IRegisterFormField {
    name: string,
    type: string,
    translationKey: string
}
interface IRegisterFormFields {
    [key: string]: IRegisterFormField
}

const fetchStart = () => ({
    type: START
})

const fetchSuccess = (payload: IRegisterFormFields) => ({
    payload,
    type: SUCCESS
})

const fetchError = (error: Error) => ({
    error,
    type: ERROR
})

const initialState = {
    data: {},
    fetched: false,
    fetching: false
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return ({
                ...state,
                fetching: true
            })
        case SUCCESS:
            return ({
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            })
        case ERROR:
            return ({
                ...state,
                error: action.error,
                fetching: false
            })
        default:
            return state
    }
}

export const fetchRegisterFields = () =>
    async (dispatch: Dispatch, getState: () => any, {db}: IServices) => {
        dispatch(fetchStart())
        try {
            const snaps = await  db.collection('registerFormFields').get()
            const fields = {};
            // @ts-ignore
            snaps.forEach(snap => fields[snap.id] = snap.data())
            dispatch(fetchSuccess(fields))
        } catch (e) {
            console.log(e)
            dispatch(fetchError(e))
        }
    }