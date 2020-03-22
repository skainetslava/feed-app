import { call, fork, put, take } from "redux-saga/effects";
import { fetchPlaylistDataApi } from "src/services/playlist/playlistAPI";
import { fetchPlaylistDataFailure, fetchPlaylistDataSuccess } from "./actions";
import { FETCH_DATA_PLAYLIST_REQUEST } from "./types";

function* fetchPlaylistDataSaga(payload: number) {
  const { response, error } = yield call(fetchPlaylistDataApi, payload);

  if (response) {
    yield put(fetchPlaylistDataSuccess(response));
  } else {
    yield put(fetchPlaylistDataFailure(error));
  }
}

export function* watchLoadPlaylist() {
  while (true) {
    const { payload } = yield take(FETCH_DATA_PLAYLIST_REQUEST);
    yield fork(fetchPlaylistDataSaga, payload);
  }
}
