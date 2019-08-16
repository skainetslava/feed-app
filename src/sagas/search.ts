import { call, fork, put, take, takeLatest } from "redux-saga/effects";

import history from "src/history";

import { searchArtistFailure, searchArtistSuccess } from "src/actions/search/artists";
import { saveSearchingValue } from "src/actions/search/url";
import {
    ISearchDataAction,
    searchDataFailure,
    searchDataSuccess,
} from "src/actions/search/tracks";

import * as constants from "src/constants/actions/search";

import { searchArtistAPI } from "src/services/search/artistAPI";
import { searchDataApi } from "src/services/search/searchAPI";

function* searchData(action: ISearchDataAction) {
    const main = yield call(searchDataApi, action.payload);

    try {
        yield put(searchDataSuccess(main.response));
    } catch (e) {
        yield put(searchDataFailure(main.error));
    }

    const artists = yield call(searchArtistAPI, action.payload);

    try {
        yield put(searchArtistSuccess(artists.response));
    } catch (e) {
        yield put(searchArtistFailure(artists.error));
    }
}

export function* watchLoadSearch() {
    yield takeLatest(constants.SEARCH_DATA_REQUEST, searchData);
}

function* redirectBySearchValue(value: string) {
    yield saveSearchingValue(value);
    yield history.push(`/search/results/${value}`);
}

export function* watchLoadSearchingValue() {
    while (true) {
        const { payload } = yield take(constants.SAVE_SEARCHING_VALUE);
        yield fork(redirectBySearchValue, payload);
    }
}