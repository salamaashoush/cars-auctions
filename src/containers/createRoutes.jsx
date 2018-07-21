import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Loadable from "react-loadable";
import carsRoute from "Routes/Cars";
import ErrorBoundry from "Shared/Errors/ErrorBoundry";
import DefaultLayout from "../layouts/default";

const createRoutes = (
  store,
  {
    match: {
      url,
      params: { lang }
    }
  }
) => (
  <DefaultLayout lang={lang} route={url}>
    <ErrorBoundry>
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={Loadable({
            loader: () => import("Routes/Home"),
            loading: () => <p>loading....</p>
          })}
        />
        <Route
          exact
          path={`${url}/cars`}
          render={props => {
            const Cars = carsRoute(store);
            return <Cars {...props} />;
          }}
        />
        <Route
          component={Loadable({
            loader: () => import("Shared/Errors/404"),
            loading: () => <p>loading....</p>
          })}
        />
      </Switch>
    </ErrorBoundry>
  </DefaultLayout>
);

export default createRoutes;
