import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";

import history from "src/history";

import { searchArtistFailure, searchArtistSuccess } from "src/actions/search/artists";
import {
    ISearchDataAction,
    searchDataFailure,
    searchDataSuccess,
} from "src/actions/search/tracks";
import { IRedirectProps, saveSearchingValue } from "src/actions/search/url";

import * as constants from "src/constants/actions/search";

import { searchArtistAPI } from "src/services/search/artistAPI";
import { searchDataApi } from "src/services/search/searchAPI";

function* searchData(action: ISearchDataAction) {
    const [main, artists] = yield all([
        call(searchDataApi, action.payload),
        call(searchArtistAPI, action.payload),
    ])

    try {
        yield put(searchDataSuccess(main.response));
    } catch (e) {
        yield put(searchDataFailure(main.error));
    }


    try {
        yield put(searchArtistSuccess(artists.response));
    } catch (e) {
        yield put(searchArtistFailure(artists.error));
    }
}

export function* watchLoadSearch() {
    yield takeLatest(constants.SEARCH_DATA_REQUEST, searchData);
}

function* redirectBySearchValue({ tabName, value }: IRedirectProps) {
    yield put(saveSearchingValue(value));
    yield history.push(`/search/${tabName}/${value}`);
}

export function* watchLoadSearchingValue() {
    while (true) {
        const { payload } = yield take(constants.REDIRECT_BY_SEARCHING_VALUE);
        yield fork(redirectBySearchValue, payload);
    }
}