import {FETCH_GENRES_SUCCEEDED} from "../constants/action-types";

const initialState = [];

const genresReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_GENRES_SUCCEEDED:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default genresReducer;