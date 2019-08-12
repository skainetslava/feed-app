import { call, put, takeLatest } from "redux-saga/effects";

import { searchDataApi } from "src/services/search/searchAPI";

import {
    ISearchDataAction,
    searchDataFailure,
    searchDataSuccess,
} from "src/actions/search";

import { searchArtistFailure, searchArtistSuccess } from "src/actions/search/artists";
import * as constants from "src/constants/actions/search";
import { searchArtistAPI } from "src/services/search/artist";

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
