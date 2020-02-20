import { FETCH_CHART_FAILURE, FETCH_CHART_REQUEST, FETCH_CHART_SUCCESS } from "./types";

import { IChartData } from "src/services/chart/chartAPI";

export interface IFetchChartRequest {
    type: FETCH_CHART_REQUEST;
}

export interface IFetchChartSuccess {
    type: FETCH_CHART_SUCCESS;
}

export interface IFetchChartFailure {
    type: FETCH_CHART_FAILURE;
}

export type ChartActionType = FETCH_CHART_FAILURE |
    FETCH_CHART_REQUEST | FETCH_CHART_SUCCESS;

export interface IChartAction {
    type: ChartActionType;
    payload?: any;
}

export function fetchChartRequest(): IChartAction {
    return {
        type: FETCH_CHART_REQUEST,
    };
}

export function fetchChartSuccess(value: IChartData): IChartAction {
    return {
        type: FETCH_CHART_SUCCESS,
        payload: value,
    };
}

export function fetchChartFailure(value: string): IChartAction {
    return {
        type: FETCH_CHART_FAILURE,
        payload: { value },
    };
}