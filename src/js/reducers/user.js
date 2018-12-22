
import {USER_FETCH_SUCCEEDED} from "../constants/action-types";

const initialState = [];

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_FETCH_SUCCEEDED:
            console.log('user: ', action.payload);
            return [ ...state,  action.payload ];

        default:
            return state;
    }
};

export default userReducer;