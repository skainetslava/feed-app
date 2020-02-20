import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import history from "src/history";
import { searchArtistAPI } from "src/services/search/artistAPI";
import { searchDataApi } from "src/services/search/searchAPI";
import {
    IRedirectProps,
    ISearchDataAction,
    saveSearchingValue,
    searchArtistFailure,
    searchArtistSuccess,
    searchDataFailure,
    searchDataSuccess,
} from "./actions";
import { REDIRECT_BY_SEARCHING_VALUE, SEARCH_DATA_REQUEST } from "./types";


function* searchDataSaga(action: ISearchDataAction) {
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
    yield takeLatest(SEARCH_DATA_REQUEST, searchDataSaga);
}

function* redirectBySearchValue({ tabName, value }: IRedirectProps) {
    yield put(saveSearchingValue(value));
    yield history.push(`/search/${tabName}/${value}`);
}

export function* watchLoadSearchingValue() {
    while (true) {
        const { payload } = yield take(REDIRECT_BY_SEARCHING_VALUE);
        yield fork(redirectBySearchValue, payload);
    }
}