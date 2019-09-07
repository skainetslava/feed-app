import { IPlaylist } from "src/models";
import * as constants from "../constants/actions/playlist";

export interface IFetchChartRequest {
    type: constants.FETCH_DATA_PLAYLIST_REQUEST;
}

export interface IFetchPlaylistDataSuccess {
    type: constants.FETCH_DATA_PLAYLIST_SUCCESS;
}

export interface IFetchPlaylistDataFailure {
    type: constants.FETCH_DATA_PLAYLIST_FAILURE;
}

export type PlaylistDataActionType = constants.FETCH_DATA_PLAYLIST_FAILURE |
    constants.FETCH_DATA_PLAYLIST_REQUEST | constants.FETCH_DATA_PLAYLIST_SUCCESS;

export interface IPlaylistDataAction {
    type: PlaylistDataActionType;
    payload?: any;
}

export function fetchPlaylistData(id: string): IPlaylistDataAction {
    return {
        type: constants.FETCH_DATA_PLAYLIST_REQUEST,
        payload: id,
    };
}

export function fetchPlaylistDataSuccess(data: IPlaylist[]): IPlaylistDataAction {
    return {
        type: constants.FETCH_DATA_PLAYLIST_SUCCESS,
        payload: data,
    };
}

export function fetchPlaylistDataFailure(value: string): IPlaylistDataAction {
    return {
        type: constants.FETCH_DATA_PLAYLIST_FAILURE,
        payload: { value },
    };
}

