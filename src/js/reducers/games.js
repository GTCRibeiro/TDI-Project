import { FETCH_GAMES_SUCCEEDED } from "../constants/action-types";

const initialState = [];

const gamesReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_GAMES_SUCCEEDED:
            return [...state, ...action.payload];

        default:
            return state;
    }
};

export default gamesReducer;