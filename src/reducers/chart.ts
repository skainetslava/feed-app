import { IChartAction } from '../actions/chart';
import * as constants from '../constants/actions/chart';

export interface IChart {
    id: number;
    label: string;
}

export interface IChartStoreState {
    tracks: IChart[];
}

const initialState: IChartStoreState = {
    tracks: [
        {
            id: 1,
            label: "One action",
        },
        {
            id: 2,
            label: "Two action",
        },
    ],
};


export default function chartReducer(state: IChartStoreState = initialState, action: IChartAction): IChartStoreState {
    switch (action.type) {
        case constants.FETCH_CHART_REQUEST:
            return {
                ...state,
            };
        case constants.FETCH_CHART_SUCCESS:
            return {
                ...state,
                tracks: [
                    ...state.tracks,
                ],
            };
        case constants.FETCH_CHART_FAILURE:
            return {
                ...state,
                tracks: [
                    ...state.tracks,
                ],
            };
        default:
            return state;
    }
}
