
import { call, fork, put, take } from "redux-saga/effects";
import { fetchAlbumDataApi } from "src/services/album/albumAPI";
import { fetchAlbumDataFailure, fetchAlbumDataSuccess } from "./actions";
import { FETCH_DATA_ALBUM_REQUEST } from "./types";

function* fetchAlbumDataSaga(payload: number) {
    const { response, error } = yield call(fetchAlbumDataApi, payload);

    if (response) {
      yield put(fetchAlbumDataSuccess(response));
    } else {
      yield put(fetchAlbumDataFailure(error));
    }
  }

export function* watchLoadAlbum() {
    while (true) {
      const { payload } = yield take(FETCH_DATA_ALBUM_REQUEST);
      yield fork(fetchAlbumDataSaga, payload);
    }
  }