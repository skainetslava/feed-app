import * as constants from "src/constants/actions/search";
import { ITrack } from "src/models";

export interface ISearchDataRequest {
    type: constants.SEARCH_DATA_REQUEST;
    payload: string;
}

export interface ISearchDataSuccess {
    type: constants.SEARCH_DATA_SUCCESS;
    payload: ITrack[]
}

export interface ISearchDataFailure {
    type: constants.SEARCH_DATA_FAILURE;
    payload: any
}

export type SearchDataActionType =
    constants.SEARCH_DATA_FAILURE |
    constants.SEARCH_DATA_REQUEST |
    constants.SEARCH_DATA_SUCCESS |
    constants.SEARCH_ARTIST_SUCCESS |
    constants.SEARCH_ARTIST_REQUEST |
    constants.SEARCH_ARTIST_FAILURE | 
    constants.REDIRECT_BY_SEARCHING_VALUE |
    constants.SAVE_SEARCHING_VALUE;

export interface ISearchDataAction {
    type: SearchDataActionType;
    payload?: any;
}

export function searchData(value: string): ISearchDataRequest {
    return {
        type: constants.SEARCH_DATA_REQUEST,
        payload: value,
    };
}

export function searchDataSuccess(data: ITrack[]): ISearchDataSuccess {
    return {
        type: constants.SEARCH_DATA_SUCCESS,
        payload: data,
    };
}

export function searchDataFailure(value: string): ISearchDataFailure {
    return {
        type: constants.SEARCH_DATA_FAILURE,
        payload: { value },
    };
}

