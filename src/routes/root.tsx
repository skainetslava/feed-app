import * as React from 'react';
import { ChartPage } from 'src/containers/ChartPage';
import { App } from 'src/components/app';

import { BrowserRouter, Route, RouteProps } from 'react-router-dom';

import { Switch } from 'react-router';

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={ChartPage} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
