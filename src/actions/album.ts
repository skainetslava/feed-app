import { IAlbumData } from "src/services/album/albumAPI";
import * as constants from "../constants/actions/album";

export interface IFetchChartRequest {
    type: constants.FETCH_DATA_ALBUM_REQUEST;
}

export interface IFetchAlbumDataSuccess {
    type: constants.FETCH_DATA_ALBUM_SUCCESS;
}

export interface IFetchAlbumDataFailure {
    type: constants.FETCH_DATA_ALBUM_FAILURE;
}

export type AlbumDataActionType = constants.FETCH_DATA_ALBUM_FAILURE |
    constants.FETCH_DATA_ALBUM_REQUEST | constants.FETCH_DATA_ALBUM_SUCCESS;

export interface IAlbumDataAction {
    type: AlbumDataActionType;
    payload?: any;
}

export function fetchAlbumData(id: string): IAlbumDataAction {
    return {
        type: constants.FETCH_DATA_ALBUM_REQUEST,
        payload: id,
    };
}

export function fetchAlbumDataSuccess(data: IAlbumData): IAlbumDataAction {
    return {
        type: constants.FETCH_DATA_ALBUM_SUCCESS,
        payload: data,
    };
}

export function fetchAlbumDataFailure(value: string): IAlbumDataAction {
    return {
        type: constants.FETCH_DATA_ALBUM_FAILURE,
        payload: { value },
    };
}

