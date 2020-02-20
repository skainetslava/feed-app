import { IArtist, ITrack } from "src/models";
import {
    REDIRECT_BY_SEARCHING_VALUE,
    SAVE_SEARCHING_VALUE,
    SEARCH_ARTIST_FAILURE,
    SEARCH_ARTIST_REQUEST,
    SEARCH_ARTIST_SUCCESS,
    SEARCH_DATA_FAILURE,
    SEARCH_DATA_REQUEST,
    SEARCH_DATA_SUCCESS,
} from "./types";

export interface ISearchArtistRequest {
    type: SEARCH_ARTIST_REQUEST;
    payload: string;
}

export interface ISearchArtistSuccess {
    type: SEARCH_ARTIST_SUCCESS;
    payload: IArtist[]
}

export interface ISearchArtistFailure {
    type: SEARCH_ARTIST_FAILURE;
    payload: string
}

export interface ISearchArtistAction {
    type: SearchDataActionType;
    payload?: any;
}

export function searchArtist(value: string): ISearchArtistRequest {
    return {
        type: SEARCH_ARTIST_REQUEST,
        payload: value,
    };
}

export function searchArtistSuccess(data: IArtist[]): ISearchArtistSuccess {
    return {
        type: SEARCH_ARTIST_SUCCESS,
        payload: data,
    };
}

export function searchArtistFailure(value: string): ISearchArtistFailure {
    return {
        type: SEARCH_ARTIST_FAILURE,
        payload: value,
    };
}

export interface ISearchDataRequest {
    type: SEARCH_DATA_REQUEST;
    payload: string;
}

export interface ISearchDataSuccess {
    type: SEARCH_DATA_SUCCESS;
    payload: ITrack[]
}

export interface ISearchDataFailure {
    type: SEARCH_DATA_FAILURE;
    payload: any
}

export type SearchDataActionType =
    SEARCH_DATA_FAILURE |
    SEARCH_DATA_REQUEST |
    SEARCH_DATA_SUCCESS |
    SEARCH_ARTIST_SUCCESS |
    SEARCH_ARTIST_REQUEST |
    SEARCH_ARTIST_FAILURE |
    REDIRECT_BY_SEARCHING_VALUE |
    SAVE_SEARCHING_VALUE;

export interface ISearchDataAction {
    type: SearchDataActionType;
    payload?: any;
}

export function searchData(value: string): ISearchDataRequest {
    return {
        type: SEARCH_DATA_REQUEST,
        payload: value,
    };
}

export function searchDataSuccess(data: ITrack[]): ISearchDataSuccess {
    return {
        type: SEARCH_DATA_SUCCESS,
        payload: data,
    };
}

export function searchDataFailure(value: string): ISearchDataFailure {
    return {
        type: SEARCH_DATA_FAILURE,
        payload: { value },
    };
}


export interface IRedirectProps {
    tabName: string;
    value: string;
}

export function saveSearchingValue(value: string) {
    return {
        type: SAVE_SEARCHING_VALUE,
        payload: value,
    };
}

export function redirectBySearchingValue(data: IRedirectProps) {
    return {
        type: REDIRECT_BY_SEARCHING_VALUE,
        payload: data,
    };
}

