import {TOKEN_FETCH_SUCCEEDED} from "../constants/action-types";

const initialState = [];

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOKEN_FETCH_SUCCEEDED:
            return [ ...state,  action.payload ];

        default:
            return state;
    }
};

export default authReducer;