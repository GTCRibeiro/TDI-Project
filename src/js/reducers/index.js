import {ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCEEDED} from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            //Este não está a ser spread o state.articles, vai adicionar os dois ao novo state
            //return { ...state, articles: [state.articles, action.payload]};
            return { ...state, articles: [...state.articles, action.payload]};

        case DELETE_ARTICLE:
            return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
        case ARTICLES_FETCH_SUCCEEDED:
            return {...state, articles: [...state.articles, ...action.payload]};

        default:
            return state;
    }
};

export default rootReducer;