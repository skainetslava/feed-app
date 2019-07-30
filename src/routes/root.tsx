import * as React from "react";
import { App } from "src/components/app";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ChartPage } from "src/containers/ChartPage";

import { BrowserRouter, Redirect, Route, RouteProps} from "react-router-dom";

import { Switch } from "react-router";

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <App>
      <Switch>
      <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
