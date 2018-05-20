"use strict";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import React from "react";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(thunk, logger, reactRouterMiddleware);
const store = createStore(reducers, middleware);

export default store;
