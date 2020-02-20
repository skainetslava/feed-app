import { createSelector } from "reselect";
import { IStore } from "../store";

const PLAYLIST_DATA = (state: IStore) => state.playlist.data;

export const getPlaylistPageData = createSelector(
    [PLAYLIST_DATA],
    (playlist) => playlist,
)

const PLAYLIST_STATUS = (state: IStore) => state.playlist.isLoading;

export const getPlaylistPageLoadingStatus = createSelector(
    [PLAYLIST_STATUS],
    (isLoading) => isLoading,
)


