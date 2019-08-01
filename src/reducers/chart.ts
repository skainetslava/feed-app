import { IAlbum, ITrack } from "src/models";
import { IChartAction } from "../actions/chart";
import * as constants from "../constants/actions/chart";

export interface IChartStoreState {
    tracks: ITrack[];
    albums: IAlbum[];
    isLoading: boolean
}

const initialState: IChartStoreState = {
    tracks: [],
    albums: [],
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
            const tracks = action.payload.tracks;
            const albums = action.payload.albums;
            return {
                ...state,
                isLoading: false,
                tracks: [
                    ...tracks,
                ],
                albums: [
                    ...albums,
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
