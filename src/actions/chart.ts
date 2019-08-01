import { IChartData } from "src/services/chartAPI";
import * as constants from "../constants/actions/chart";
export interface IFetchChartRequest {
    type: constants.FETCH_CHART_REQUEST;
}

export interface IFetchChartSuccess {
    type: constants.FETCH_CHART_SUCCESS;
}

export interface IFetchChartFailure {
    type: constants.FETCH_CHART_FAILURE;
}

export type ChartActionType = constants.FETCH_CHART_FAILURE |
    constants.FETCH_CHART_REQUEST | constants.FETCH_CHART_SUCCESS;

export interface IChartAction {
    type: ChartActionType;
    payload?: any;
}

export function fetchChartRequest(): IChartAction {
    return {
        type: constants.FETCH_CHART_REQUEST,
    };
}

export function fetchChartSuccess(value: IChartData): IChartAction {
    return {
        type: constants.FETCH_CHART_SUCCESS,
        payload: value,
    };
}

export function fetchChartFailure(value: string): IChartAction {
    return {
        type: constants.FETCH_CHART_FAILURE,
        payload: { value },
    };
}

