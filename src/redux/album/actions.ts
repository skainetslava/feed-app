import { IAlbum } from "src/models";
import { FETCH_DATA_ALBUM_FAILURE, FETCH_DATA_ALBUM_REQUEST, FETCH_DATA_ALBUM_SUCCESS } from "./types";

export interface IFetchChartRequest {
    type: FETCH_DATA_ALBUM_REQUEST;
}

export interface IFetchAlbumDataSuccess {
    type: FETCH_DATA_ALBUM_SUCCESS;
}

export interface IFetchAlbumDataFailure {
    type: FETCH_DATA_ALBUM_FAILURE;
}

export type AlbumDataActionType = FETCH_DATA_ALBUM_FAILURE |
    FETCH_DATA_ALBUM_REQUEST | FETCH_DATA_ALBUM_SUCCESS;

export interface IAlbumDataAction {
    type: AlbumDataActionType;
    payload?: any;
}


export function fetchAlbumData(id: string): IAlbumDataAction {
    return {
        type: FETCH_DATA_ALBUM_REQUEST,
        payload: id,
    };
}

export function fetchAlbumDataSuccess(data: IAlbum[]): IAlbumDataAction {
    return {
        type: FETCH_DATA_ALBUM_SUCCESS,
        payload: data,
    };
}

export function fetchAlbumDataFailure(value: string): IAlbumDataAction {
    return {
        type: FETCH_DATA_ALBUM_FAILURE,
        payload: { value },
    };
}