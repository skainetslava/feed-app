import { createSelector } from "reselect";

import { IStore } from "src/store";

const ALBUM_DATA = (state: IStore) => state.album.data;

export const getAlbumData = createSelector(
    [ALBUM_DATA],
    (album) => album,
)

const LOADING_ALBUMS = (state: IStore) => state.album.isLoading;

export const getAlbumLoadingStatus = createSelector(
    [LOADING_ALBUMS],
    (isLoading) => isLoading,
)