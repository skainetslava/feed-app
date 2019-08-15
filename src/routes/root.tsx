import * as React from "react";
import { App } from "src/components/app";

import { Switch } from "react-router";
import { Redirect, Route, RouteProps, Router } from "react-router-dom";

import { AlbumPage } from "src/containers/AlbumPage";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ArtistPage } from "src/containers/artistPage";
import { ChartPage } from "src/containers/ChartPage";
import { SearchPage } from "src/containers/SearchPage";

import history from "src/history";
// <Route exact path="/search/:value" component={SearchContent} />

// <Route  path="/" component={SearchContent} />
// </Route>
const Routes: React.FC<RouteProps> = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/artist/:id" component={ArtistPage} />
        <Route exact path="/search/results" component={SearchPage} />
        <Route path="/search/results/:value" component={SearchPage} />
      </Switch>
    </App>
  </Router >
);

export default Routes;
