import * as React from "react";
import { App } from "src/components/app";

import { AlbumPage } from "src/containers/AlbumPage";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ChartPage } from "src/containers/ChartPage";

import { Switch } from "react-router";
import { BrowserRouter, Redirect, Route, RouteProps } from "react-router-dom";

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
