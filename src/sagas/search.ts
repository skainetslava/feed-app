import { call, put, takeLatest } from "redux-saga/effects";

import { searchDataApi } from "src/services/search/searchAPI";

import {
    ISearchDataAction,
    searchDataFailure,
    searchDataSuccess,
} from "src/actions/search";

import * as constants from "src/constants/actions/search";

function* searchData(action: ISearchDataAction) {
    const { response, error } = yield call(searchDataApi, action.payload);

    if (response) {
        yield put(searchDataSuccess(response));
    } else {
        yield put(searchDataFailure(error));
    }
}

export function* watchLoadSearch() {
    yield takeLatest(constants.SEARCH_DATA_REQUEST, searchData);
}
