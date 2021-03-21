import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {
    user: {
        username: "",
        password: "",
        _id: ""
    }
}

export default function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER_FULFILLED:
            return { ...state, user: action.payload };

        default:
            return state;
    }
}