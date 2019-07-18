import * as React from 'react';
import { ChartPage } from 'src/containers/ChartPage';

import { BrowserRouter, Route, RouteProps } from 'react-router-dom';

import { Switch } from 'react-router';

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ChartPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
