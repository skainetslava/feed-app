import { IArtist, ITrack } from "src/models";
import { ISearchDataAction } from "./actions";
import {
    SAVE_SEARCHING_VALUE,
    SEARCH_ARTIST_FAILURE,
    SEARCH_ARTIST_REQUEST,
    SEARCH_ARTIST_SUCCESS,
    SEARCH_DATA_FAILURE,
    SEARCH_DATA_REQUEST,
    SEARCH_DATA_SUCCESS,
} from "./types";


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

export function reducer(
    state: ISearchStoreState = initialState,
    action: ISearchDataAction,
): ISearchStoreState {
    switch (action.type) {
        case SEARCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                tracks: [],
                artists: [],
            };
        case SEARCH_DATA_SUCCESS:
            const tracks = action.payload;
            return {
                ...state,
                isLoading: false,
                tracks,
            };
        case SEARCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                tracks: [],
            };
        case SEARCH_ARTIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                artists: [],
            };
        case SEARCH_ARTIST_SUCCESS:
            const artists = action.payload;
            return {
                ...state,
                isLoading: false,
                artists,
            };
        case SEARCH_ARTIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                artists: [],
            };

        case SAVE_SEARCHING_VALUE:
            const value = action.payload;
            return {
                ...state,
                isLoading: true,
                searchingValue: value,
            };
        default:
            return state;
    }
}
