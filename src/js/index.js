import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";

//import createSagaMiddleware from 'redux-saga';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);


//sagaMiddleware.run(mySaga);