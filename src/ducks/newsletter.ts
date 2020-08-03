import {Dispatch} from 'redux';
import {IServices} from '../services';
import {subscribeNewsAction} from '../store/actions';

export interface INewsletter {
    email: string
}

export default function reducer(state = {}) {
    return state
}

export const subscribe = ({email}: INewsletter) =>
    async (dispatch: Dispatch, getState: () => any, {db}: IServices) => {
        if (email !== 'NA') {
            const doc = await db.collection('newsletter').add({email})
            console.log('firestore doc: ', doc);
        }
        dispatch(subscribeNewsAction({email}))
    }
