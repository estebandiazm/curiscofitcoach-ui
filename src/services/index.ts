import * as firebase from './firebase'
import {firestore, auth} from 'firebase'

const services = {
    ...firebase
}

export interface IServices {
    db: firestore.Firestore,
    auth: auth.Auth
}

export default services