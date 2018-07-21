import { enableBatching } from "redux-batched-actions";
import { combineReducers } from "redux";
import createHistory from "history/createBrowserHistory";
import { connectRouter } from "connected-react-router";
import { localizeReducer } from "react-localize-redux";
/* eslint-disable no-param-reassign */

export const history = createHistory();

const combineLazyReducers = (reducers, initialState) => {
  const reducerKeys = new Set(Object.keys(reducers));
  Object.keys(initialState)
    .filter(k => !reducerKeys.has(k))
    .forEach(k => {
      reducers[k] = state => (state === undefined ? null : state);
    });
  return combineReducers(reducers);
};

const makeRootReducer = (asyncReducers = {}, state) =>
  enableBatching(
    connectRouter(history)(
      combineLazyReducers(
        {
          localize: localizeReducer,
          ...asyncReducers
        },
        state
      )
    )
  );

export const injectReducer = (store, { key, getReducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return Promise.resolve();
  }
  return getReducer().then(module => {
    store.asyncReducers[key] = module.default;
    store.replaceReducer(
      makeRootReducer(store.asyncReducers, store.getState())
    );
  });
};

export default makeRootReducer;
