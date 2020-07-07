import {SingActionTypes, SingInState} from "./types";

const initialState: SingInState = {
    singIn: false,
    timestamp: 0
}

export function singReducer(state = initialState, action: SingActionTypes) {
    switch (action.type) {
        case "SING_IN":
           return {
                singIn: action.payload,
                timestamp: Date.now()
            }
        default:
            return state
    }
}