import { call, fork, put, take } from "redux-saga/effects";
import { fetchChartApi, IChartData } from "src/services/chart/chartAPI";
import { fetchChartFailure, fetchChartSuccess } from "./actions";
import { FETCH_CHART_REQUEST } from "./types";


function* fetchChart(payload: IChartData) {
    const {
        response, error,
    } = yield call(fetchChartApi);

    if (response) {
        yield put(fetchChartSuccess(response));
    } else {
        yield put(fetchChartFailure(error));
    }
}

export function* watchLoadChart() {
    while (true) {
        const { payload } = yield take(FETCH_CHART_REQUEST);
        yield fork(fetchChart, payload);
    }
}