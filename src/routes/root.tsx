import * as React from "react";
import { App } from "src/components/app";

import { Switch } from "react-router";
import { Redirect, Route, RouteProps, Router } from "react-router-dom";

import { AlbumPage } from "src/containers/AlbumPage";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ArtistPage } from "src/containers/artistPage";
import { ChartPage } from "src/containers/ChartPage";

import history from "src/history";
import SearchRoutes from "./search";

const Routes: React.FC<RouteProps> = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/artist/:id" component={ArtistPage} />
        <SearchRoutes />
      </Switch>
    </App>
  </Router >
);

export default Routes;
