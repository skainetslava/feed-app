import { call, fork, put, take } from "redux-saga/effects";

import { fetchArtistDataApi } from "src/services/artistAPI";

import {
  fetchArtistAlbumsFailure,
  fetchArtistAlbumsSuccess,
  fetchArtistDataFailure,
  fetchArtistDataSuccess,
  fetchArtistTracksFailure,
  fetchArtistTracksSuccess,
} from "src/actions/artist";

import * as constants from "src/constants/actions/artist";
import { fetchArtistMostPopularTracksAPI } from "src/services/artist/tracks";
import { fetchArtistAlbumsAPI } from 'src/services/artist/albums';

function* fetchArtistData(payload: number) {
  const main = yield call(fetchArtistDataApi, payload);

  try {
    yield put(fetchArtistDataSuccess(main.response));
  } catch (e) {
    yield put(fetchArtistDataFailure(main.error));
  }

  const tracks = yield call(fetchArtistMostPopularTracksAPI, payload);

  try {
    yield put(fetchArtistTracksSuccess(tracks.response));
  } catch (e) {
    yield put(fetchArtistTracksFailure(tracks.error));
  }

  const albums = yield call(fetchArtistAlbumsAPI, payload);

  try {
    yield put(fetchArtistAlbumsSuccess(albums.response));
  } catch (e) {
    yield put(fetchArtistAlbumsFailure(albums.error));
  }

}

export function* watchLoadArtist() {
  while (true) {
    const { payload } = yield take(constants.FETCH_DATA_ARTIST_REQUEST);
    yield fork(fetchArtistData, payload);
  }
}
