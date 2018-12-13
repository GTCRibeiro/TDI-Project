import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_ARTICLES, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_ERROR} from '../constants/action-types';

//constante com o endereço da API
import {ENDPOINT} from "../constants/services";

function fetchAll(){
    console.log("fetched");
    return fetch(ENDPOINT+"reviews").then(response => response.json(), );
}

//worker Saga: irá ser invocada quando ocorrer um FETCH_ARTICLES action
function* fetchArticles(){
    try {
        //invocar a função para obter a lista de artigos
        const articles = yield call(fetchAll);
        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles.data});
    }catch (e) {

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