import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_GENRES, FETCH_GENRES_SUCCEEDED, FETCH_GENRES_ERROR, FETCH_GENRES_GAMES_SUCCEEDED, FETCH_GENRES_GAMES_ERROR} from "../constants/action-types";

import {ENDPOINT_GENRES} from "../constants/services";

function fetchAll() {
    return fetch(ENDPOINT_GENRES).then(response => response.json());
}


function* fetchGenres(){
    try{
        const genres = yield call(fetchAll);
        yield put({type: FETCH_GENRES_SUCCEEDED, payload: genres.data});
    }catch(e){
        yield put({type: FETCH_GENRES_ERROR, message: e.message});
    }
}



function* genreSaga(){
    console.log('genre saga working');
    yield takeLatest(FETCH_GENRES, fetchGenres);
}

export default genreSaga;