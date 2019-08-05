import { IArtistData } from "src/services/artistAPI";
import * as constants from "../constants/actions/artist";

export interface IFetchChartRequest {
    type: constants.FETCH_DATA_ARTIST_REQUEST;
}

export interface IFetchArtistDataSuccess {
    type: constants.FETCH_DATA_ARTIST_SUCCESS;
}

export interface IFetchArtistDataFailure {
    type: constants.FETCH_DATA_ARTIST_FAILURE;
}

export type ArtistDataActionType = constants.FETCH_DATA_ARTIST_FAILURE |
    constants.FETCH_DATA_ARTIST_REQUEST | constants.FETCH_DATA_ARTIST_SUCCESS;

export interface IArtistDataAction {
    type: ArtistDataActionType;
    payload?: any;
}

export function fetchArtistData(id: string): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_REQUEST,
        payload: id,
    };
}

export function fetchArtistDataSuccess(data: IArtistData): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_SUCCESS,
        payload: data,
    };
}

export function fetchArtistDataFailure(value: string): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_FAILURE,
        payload: { value },
    };
}

