import { createSelector } from "reselect";
import { IStore } from "../store";


const CHART_TRACKS = (state: IStore) => state.chart.tracks;

export const getChartTracks = createSelector(
    [CHART_TRACKS],
    (tracks) => tracks && tracks,
);

const CHART_ALBUMS = (state: IStore) => state.chart.albums;

export const getChartAlbums = createSelector(
    [CHART_ALBUMS],
    (albums) => albums,
);

const CHART_PLAYLISTS = (state: IStore) => state.chart.playlists;

export const getChartPlaylists = createSelector(
    [CHART_PLAYLISTS],
    (playlists) => playlists,
);

const CHART_STATUS = (state: IStore) => state.chart.isLoading;

export const getChartLoadingStatus = createSelector(
    [CHART_STATUS],
    (isLoading) => isLoading,
)

