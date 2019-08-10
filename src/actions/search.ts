import * as constants from "src/constants/actions/search";
import { ISearchData } from "src/services/search/searchAPI";

export interface ISearchDataRequest {
    type: constants.SEARCH_DATA_REQUEST;
}

export interface ISearchDataSuccess {
    type: constants.SEARCH_DATA_SUCCESS;
}

export interface ISearchDataFailure {
    type: constants.SEARCH_DATA_FAILURE;
}

export type SearchDataActionType = constants.SEARCH_DATA_FAILURE |
    constants.SEARCH_DATA_REQUEST | constants.SEARCH_DATA_SUCCESS;

export interface ISearchDataAction {
    type: SearchDataActionType;
    payload?: any;
}

export function searchData(value: string): ISearchDataAction {
    return {
        type: constants.SEARCH_DATA_REQUEST,
        payload: value,
    };
}

export function searchDataSuccess(data: ISearchData): ISearchDataAction {
    return {
        type: constants.SEARCH_DATA_SUCCESS,
        payload: data,
    };
}

export function searchDataFailure(value: string): ISearchDataAction {
    return {
        type: constants.SEARCH_DATA_FAILURE,
        payload: { value },
    };
}

