import { fork } from 'redux-saga/effects'
import tokenSaga from './token';

import mySaga from "./index";
import genreSaga from "./genres";
import gamesSaga from "./games";
import genreGamesSaga from "./genresGames";


function* rootSaga () {
    yield [
        fork(mySaga),
        fork(tokenSaga),
        fork(genreSaga),
        fork(gamesSaga),
        fork(genreGamesSaga)
    ];
}

export default rootSaga;