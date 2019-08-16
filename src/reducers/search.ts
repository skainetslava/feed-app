import { IArtist, ITrack } from "src/models";
import { ISearchDataAction } from "../actions/search/tracks";
import * as constants from "../constants/actions/search";

export interface ISearchStoreState {
    searchingValue: string,
    tracks: ITrack[];
    artists: IArtist[],
    isLoading: boolean;
}

const initialState: ISearchStoreState = {
    searchingValue: "",
    tracks: [],
    artists: [],
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
                tracks: [],
                artists: [],
            };
        case constants.SEARCH_DATA_SUCCESS:
            const tracks = action.payload;
            return {
                ...state,
                isLoading: false,
                tracks,
            };
        case constants.SEARCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                tracks: [],
            };
        case constants.SEARCH_ARTIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                artists: [],
            };
        case constants.SEARCH_ARTIST_SUCCESS:
            const artists = action.payload;
            return {
                ...state,
                isLoading: false,
                artists,
            };
        case constants.SEARCH_ARTIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                artists: [],
            };

        case constants.SAVE_SEARCHING_VALUE:
            const value = action.payload;
            return {
                ...state,
                isLoading: true,
                searchingValue: value,
                tracks: [],
                artists: [],
            };
        default:
            return state;
    }
}
