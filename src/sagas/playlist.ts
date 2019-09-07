import { call, fork, put, take } from "redux-saga/effects";

import { fetchPlaylistDataApi } from "src/services/playlist/playlistAPI";

import {
  fetchPlaylistDataFailure,
  fetchPlaylistDataSuccess,
} from "src/actions/playlist";

import * as constants from "src/constants/actions/playlist";

function* fetchPlaylistData(payload: number) {
  const { response, error } = yield call(fetchPlaylistDataApi, payload);

  if (response) {
    yield put(fetchPlaylistDataSuccess(response));
  } else {
    yield put(fetchPlaylistDataFailure(error));
  }
}

export function* watchLoadPlaylist() {
  while (true) {
    const { payload } = yield take(constants.FETCH_DATA_PLAYLIST_REQUEST);
    yield fork(fetchPlaylistData, payload);
  }
}
