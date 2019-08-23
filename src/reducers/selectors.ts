
import { createSelector } from "reselect";

import { IStore } from "src/store";

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

const CHART_STATUS = (state: IStore) => state.chart.isLoading;

export const getChartLoadingStatus = createSelector(
    [CHART_STATUS],
    (isLoading) => isLoading,
)

const ALBUM_DATA = (state: IStore) => state.album.data;

export const getAlbumData = createSelector(
    [ALBUM_DATA],
    (album) => album,
)

const ARTIST_DATA = (state: IStore) => state.artist.data;

export const getArtistData = createSelector(
    [ARTIST_DATA],
    (artist) => artist,
)

const ARTIST_POPULAR_TRACKS = (state: IStore) => state.artist.tracks;

export const getArtistMostPopularTracks = createSelector(
    [ARTIST_POPULAR_TRACKS],
    (tracks) => tracks,
)

const ARTIST_ALBUMS = (state: IStore) => state.artist.albums;

export const getArtistAlbums = createSelector(
    [ARTIST_ALBUMS],
    (albums) => albums,
)

const SEARCH_TRACKS = (state: IStore) => state.search.tracks;

export const getSearchTracks = createSelector(
    [SEARCH_TRACKS],
    (tracks) => tracks,
)

const SEARCH_ARTISTS = (state: IStore) => state.search.artists;

export const getSearchArtists = createSelector(
    [SEARCH_ARTISTS],
    (artists) => artists,
)

const SEARCHING_VALUE = (state: IStore) => state.search.searchingValue;

export const getSearchingValue = createSelector(
    [SEARCHING_VALUE],
    (value) => value,
)

const PLAYER = (state: IStore) => state.player;

export const getCurrentAudio = createSelector(
    [PLAYER],
    (data) =>  data.source,
)

export const getPlayerAudioStatus = createSelector(
    [PLAYER],
    (data) => data.isPlaying,
)

export const getPlaylist = createSelector(
    [PLAYER],
    (data) => data.playlist,
)

export const getDuration = createSelector(
    [PLAYER],
    (data) => data.timing,
)