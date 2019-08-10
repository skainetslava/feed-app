import { ITrack } from "src/models";
import { ISearchDataAction } from "../actions/search";
import * as constants from "../constants/actions/search";

export interface ISearchStoreState {
    data: ITrack[];
    isLoading: boolean;
}

const initialState: ISearchStoreState = {
    data: [],
    isLoading: false,
};

export default function searchReducer(
    state: ISearchStoreState = initialState,
    action: ISearchDataAction,
): ISearchStoreState {
    switch (action.type) {
        case constants.SEARCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case constants.SEARCH_DATA_SUCCESS:
            const tracks = action.payload;
            return {
                ...state,
                isLoading: false,
                data: tracks,
            };
        case constants.SEARCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: [],
            };
        default:
            return state;
    }
}
