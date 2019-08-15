import * as constants from "src/constants/actions/search";
import { IArtist } from "src/models";
import { SearchDataActionType } from "./tracks";

export interface ISearchArtistRequest {
    type: constants.SEARCH_ARTIST_REQUEST;
    payload: string;
}

export interface ISearchArtistSuccess {
    type: constants.SEARCH_ARTIST_SUCCESS;
    payload: IArtist[]
}

export interface ISearchArtistFailure {
    type: constants.SEARCH_ARTIST_FAILURE;
    payload: string
}

export interface ISearchArtistAction {
    type: SearchDataActionType;
    payload?: any;
}

export function searchArtist(value: string): ISearchArtistRequest {
    return {
        type: constants.SEARCH_ARTIST_REQUEST,
        payload: value,
    };
}

export function searchArtistSuccess(data: IArtist[]): ISearchArtistSuccess {
    return {
        type: constants.SEARCH_ARTIST_SUCCESS,
        payload: data,
    };
}

export function searchArtistFailure(value: string): ISearchArtistFailure {
    return {
        type: constants.SEARCH_ARTIST_FAILURE,
        payload: value,
    };
}

