import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { LocalizeProvider } from "react-localize-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import configureStore from "../store";
import initialState from "../store/initialState";
import createRoutes from "./createRoutes";

/* eslint-disable react/prop-types */
const langs = ["ar", "en"];
const App = () => {
  const { store, history } = configureStore(initialState);

  return (
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/:lang"
              render={props => {
                if (!langs.includes(props.match.params.lang)) {
                  const NotFound = Loadable({
                    loader: () => import("Shared/Errors/404"),
                    loading: () => <p>loading....</p>
                  });
                  return <NotFound />;
                }
                return createRoutes(store, props);
              }}
            />
            <Route
              excat
              path="/"
              render={() => <Redirect from="/" to="/en" />}
            />
          </Switch>
        </ConnectedRouter>
      </LocalizeProvider>
    </Provider>
  );
};

export default hot(module)(App);
