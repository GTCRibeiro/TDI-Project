import {FETCH_GENRES_GAMES_SUCCEEDED} from "../constants/action-types";

const initialState = [];

const genresGamesReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_GENRES_GAMES_SUCCEEDED:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default genresGamesReducer;