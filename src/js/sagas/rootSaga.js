import { fork } from 'redux-saga/effects'

import mySaga from "./index";
import tokenSaga from "./auth";

function* rootSaga () {
    yield [
        fork(mySaga),
        fork(tokenSaga),
    ];
}

export default rootSaga;