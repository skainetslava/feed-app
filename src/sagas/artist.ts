import { call, fork, put, take } from "redux-saga/effects";

import { fetchArtistDataApi } from "src/services/artistAPI";

import {
  fetchArtistDataFailure,
  fetchArtistDataSuccess,
} from "src/actions/artist";

import * as constants from "src/constants/actions/artist";

function* fetchArtistData(payload: number) {
  const { response, error } = yield call(fetchArtistDataApi, payload);

  if (response) {
    yield put(fetchArtistDataSuccess(response));
  } else {
    yield put(fetchArtistDataFailure(error));
  }
}

export function* watchLoadArtist() {
  while (true) {
    const { payload } = yield take(constants.FETCH_DATA_ARTIST_REQUEST);
    yield fork(fetchArtistData, payload);
  }
}
