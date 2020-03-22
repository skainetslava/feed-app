import { IPlaylist } from "src/models";
import {
  FETCH_DATA_PLAYLIST_FAILURE,
  FETCH_DATA_PLAYLIST_REQUEST,
  FETCH_DATA_PLAYLIST_SUCCESS,
} from "./types";

export interface IFetchChartRequest {
  type: FETCH_DATA_PLAYLIST_REQUEST;
}

export interface IFetchPlaylistDataSuccess {
  type: FETCH_DATA_PLAYLIST_SUCCESS;
}

export interface IFetchPlaylistDataFailure {
  type: FETCH_DATA_PLAYLIST_FAILURE;
}

export type PlaylistDataActionType =
  | FETCH_DATA_PLAYLIST_FAILURE
  | FETCH_DATA_PLAYLIST_REQUEST
  | FETCH_DATA_PLAYLIST_SUCCESS;

export interface IPlaylistDataAction {
  type: PlaylistDataActionType;
  payload?: any;
}

export function fetchPlaylistData(id: string): IPlaylistDataAction {
  return {
    type: FETCH_DATA_PLAYLIST_REQUEST,
    payload: id,
  };
}

export function fetchPlaylistDataSuccess(data: IPlaylist[]): IPlaylistDataAction {
  return {
    type: FETCH_DATA_PLAYLIST_SUCCESS,
    payload: data,
  };
}

export function fetchPlaylistDataFailure(value: string): IPlaylistDataAction {
  return {
    type: FETCH_DATA_PLAYLIST_FAILURE,
    payload: { value },
  };
}
