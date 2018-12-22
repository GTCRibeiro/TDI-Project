import { ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = [];

const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case ADD_ARTICLE:
            return [...state, action.payload];

        case DELETE_ARTICLE:
            return {...state, ...state.filter((x) => x !== action.payload)};

        case ARTICLES_FETCH_SUCCEEDED:
            return [...state, ...action.payload];

        default:
            return state;

    }
};

export default rootReducer;