import {
    call,
    fork,
    put,
    take,
} from "redux-saga/effects";


import {
    fetchChartApi,
    IChartData,
} from "src/services/chartAPI";

import {
    fetchChartFailure,
    fetchChartSuccess,
} from "src/actions/chart";

import * as constants from "src/constants/actions/chart";


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
        const { payload } = yield take(constants.FETCH_CHART_REQUEST);
        yield fork(fetchChart, payload);
    }
}
