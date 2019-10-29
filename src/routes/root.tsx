import * as React from "react";
import { Redirect, Route, RouteProps, Router } from "react-router-dom";
import { AppContainer } from "src/containers/app";

const ChartPage = React.lazy(() => import("../containers/ChartPage/ChartPage"));
const AlbumPage = React.lazy(() => import("../containers/AlbumPage/AlbumPage"));
const AlbumsChartPage = React.lazy(() => import("../containers/AlbumsChartPage/AlbumsChartPage"));
const ArtistPage = React.lazy(() => import("../containers/artistPage/ArtistPage"));
const PlaylistPage = React.lazy(() => import("../containers/playlistPage/playlistPage"));
const PlaylistsChartPage = React.lazy(() =>
  import("../containers/playlistsChartPage/PlaylistsChartPage"),
);

// tslint:disable-next-line:no-var-requires
import { AnimatedSwitch } from "react-router-transition";

import history from "src/history";

import SearchRoutes from "./search";

const Routes: React.FC<RouteProps> = () => (
  <Router history={history}>
    <React.Suspense fallback={<div>Загрузка...</div>}>
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
          <Route exact path="/playlists" component={PlaylistsChartPage} />
          <Route exact path="/album/:id" component={AlbumPage} />
          <Route exact path="/playlist/:id" component={PlaylistPage} />
          <Route exact path="/artist/:id" component={ArtistPage} />
          <SearchRoutes />
        </AnimatedSwitch>
      </AppContainer>
    </React.Suspense>
  </Router>
);

export default Routes;
