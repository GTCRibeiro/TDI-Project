import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GAMES, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_ERROR} from "../constants/action-types";

import {ENDPOINT_GAMES} from "../constants/services";

function fetchAll() {
    return fetch(ENDPOINT_GAMES).then(response => response.json());
}

function* fetchGames(){
    try{
        const genres = yield call(fetchAll);
        yield put({type: FETCH_GAMES_SUCCEEDED, payload: genres.data});
    }catch(e){
        yield put({type: FETCH_GAMES_ERROR, message: e.message});
    }
}

function* gamesSaga(){
    console.log('game saga working');
    yield takeLatest(FETCH_GAMES, fetchGames);
}

export default gamesSaga;