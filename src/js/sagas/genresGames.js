import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GENRES_GAMES_SUCCEEDED, FETCH_GENRES_GAMES_ERROR, FETCH_GENRES_GAMES} from "../constants/action-types";

import {ENDPOINT_GENRES} from "../constants/services";

function fetchMost(){
    console.log("this is the id in the fetchMost");
    return fetch(ENDPOINT_GENRES);
}

function* fetchGenresGames(){
    try{
        const genresGames = yield call(fetchMost());
        yield put({type: FETCH_GENRES_GAMES_SUCCEEDED, payload: genresGames.data});
    }catch(e){
        yield put({type: FETCH_GENRES_GAMES_ERROR, message: e.message});
    }
}

function* genreGamesSaga(){
    console.log('genreGames saga working');
    yield takeLatest(FETCH_GENRES_GAMES, fetchGenresGames);
}

export default genreGamesSaga;