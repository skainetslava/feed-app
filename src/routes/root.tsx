import * as React from "react";
import { Redirect, Route, RouteProps, Router } from "react-router-dom";
import { AppContainer } from "src/containers/app";

import { AlbumPage } from "src/containers/AlbumPage";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ArtistPage } from "src/containers/artistPage";
import { ChartPage } from "src/containers/ChartPage";

// tslint:disable-next-line:no-var-requires
const { AnimatedSwitch } = require("react-router-transition");

import history from "src/history";

import SearchRoutes from "./search";

const Routes: React.FC<RouteProps> = () => (
  <Router history={history}>
    <AppContainer>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/artist/:id" component={ArtistPage} />
        <SearchRoutes />
      </ AnimatedSwitch>
    </AppContainer >
  </Router >
);

export default Routes;
