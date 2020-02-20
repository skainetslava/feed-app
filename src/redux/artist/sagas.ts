import { call, fork, put, take } from "redux-saga/effects";
import { fetchArtistAlbumsAPI } from "src/services/artist/albums";
import { fetchArtistDataApi } from "src/services/artist/artistAPI";
import { fetchArtistMostPopularTracksAPI } from "src/services/artist/tracks";
import {
    fetchArtistAlbumsFailure,
    fetchArtistAlbumsSuccess,
    fetchArtistDataFailure,
    fetchArtistDataSuccess,
    fetchArtistTracksFailure,
    fetchArtistTracksSuccess,
} from "./actions";
import { FETCH_DATA_ARTIST_REQUEST } from "./types";


function* fetchArtistDataSaga(payload: number) {
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
      const { payload } = yield take(FETCH_DATA_ARTIST_REQUEST);
      yield fork(fetchArtistDataSaga, payload);
    }
  }
