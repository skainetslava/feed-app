
import { createSelector } from "reselect";

import { IStore } from "src/store";

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


const LOADING_ARTIST = (state: IStore) => state.artist.isLoading;

export const getArtistLoadingStatus = createSelector(
    [LOADING_ARTIST],
    (isLoading) => isLoading,
)