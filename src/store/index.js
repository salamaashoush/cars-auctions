import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { batchDispatchMiddleware } from "redux-batched-actions";
import makeRootReducer, { history } from "./makeRootReducer";

/* eslint-disable global-require, import/no-dynamic-require */
const router = routerMiddleware(history);
const middleware = [router, thunk, batchDispatchMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middleware.push(logger);
}

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const configureStore = initialState => {
  const store = createStore(
    makeRootReducer({}, initialState),
    initialState,
    enhancer
  );
  if (module.hot) {
    module.hot.accept("./makeRootReducer.js", () => {
      const nextRootReducer = require("./makeRootReducer.js").default; // eslint-disable-line global-require
      store.replaceReducer(
        nextRootReducer(store.asyncReducers, store.getState())
      );
    });
  }
  store.asyncReducers = {};
  return {
    store,
    history
  };
};

export default configureStore;
