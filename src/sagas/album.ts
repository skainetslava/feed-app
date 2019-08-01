import { call, fork, put, take } from "redux-saga/effects";

import { fetchAlbumDataApi } from "src/services/albumAPI";

import {
  fetchAlbumDataFailure,
  fetchAlbumDataSuccess,
} from "src/actions/album";

import * as constants from "src/constants/actions/album";

function* fetchAlbumData(payload: number) {
  const { response, error } = yield call(fetchAlbumDataApi, payload);

  if (response) {
    yield put(fetchAlbumDataSuccess(response));
  } else {
    yield put(fetchAlbumDataFailure(error));
  }
}

export function* watchLoadAlbum() {
  while (true) {
    const { payload } = yield take(constants.FETCH_DATA_ALBUM_REQUEST);
    yield fork(fetchAlbumData, payload);
  }
}
