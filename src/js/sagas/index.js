import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_ARTICLES, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_ERROR} from '../constants/action-types';

import { ENDPOINT_REVIEWS} from "../constants/services";

function fetchAll() {
    return fetch(ENDPOINT_REVIEWS).then(response => response.json() );
}

function* fetchArticles(){
    try {
        const articles = yield call(fetchAll);
        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles.data});
    } catch (e) {

        yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
    }
}

/*
Utilizar a função takeLatest para evitar multiplas chamadas à API
Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
 */
function* mySaga()  {
    console.log('articles saga init');
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySaga;