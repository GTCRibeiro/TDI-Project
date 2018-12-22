import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";

import Navbar from "./components/Navbar";

//import createSagaMiddleware from 'redux-saga';

render(
    <Navbar store={store}/>,
    document.getElementById("app")
);


//sagaMiddleware.run(mySaga);