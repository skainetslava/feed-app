import { IAlbum, IPlaylist, ITrack } from "src/models";
import { IChartAction } from "../actions/chart";
import * as constants from "../constants/actions/chart";

export interface IChartStoreState {
    tracks: ITrack[];
    albums: IAlbum[];
    playlists: IPlaylist[];
    isLoading: boolean;
}

const initialState: IChartStoreState = {
    tracks: [],
    albums: [],
    playlists: [],
    isLoading: false,
};


export default function chartReducer(state: IChartStoreState = initialState, action: IChartAction): IChartStoreState {
    switch (action.type) {
        case constants.FETCH_CHART_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case constants.FETCH_CHART_SUCCESS:
            const { tracks, albums, playlists } = action.payload;
            return {
                ...state,
                isLoading: false,
                tracks: [
                    ...tracks,
                ],
                albums: [
                    ...albums,
                ],
                playlists: [
                    ...playlists,
                ],
            };
        case constants.FETCH_CHART_FAILURE:
            return {
                ...state,
                isLoading: false,
                tracks: [
                    ...state.tracks,
                ],
            };
        default:
            return state;
    }
}
