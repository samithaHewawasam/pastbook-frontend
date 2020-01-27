import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import * as serviceWorker from "./serviceWorker";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";
import Routes from "./routes";
import sagas from "./sagas";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const sagaMiddleware = createSagaMiddleware();
const routerHistory = createBrowserHistory();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(routerHistory)),
    typeof window !== "undefined" && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={routerHistory}>
        <Routes/>
        <ToastContainer />
    </Router>
  </Provider>,

  document.getElementById("react-root")
);

serviceWorker.register();
