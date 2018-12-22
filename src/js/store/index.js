import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import articles from "../reducers/index";
import auth from "../reducers/token";
import user from "../reducers/user";
import genres from "../reducers/genres";
import games from "../reducers/games";
import genresGames from "../reducers/genresGames";

import rootSaga from "../sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(

    combineReducers({
        articles, auth, user, genres, games,
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

