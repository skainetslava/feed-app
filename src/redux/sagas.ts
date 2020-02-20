import { all, fork } from "redux-saga/effects";

import {
  playerSagas,
} from "src/redux/player";

import { albumSagas } from "src/redux/album";
import { artistSagas } from "src/redux/artist";
import { chartSagas } from "src/redux/chart";
import { playlistSagas } from "src/redux/playlist";
import { searchSagas } from "src/redux/search";

export default function* rootSaga() {
  yield all([
    fork(chartSagas.watchLoadChart),
    fork(albumSagas.watchLoadAlbum),
    fork(artistSagas.watchLoadArtist),
    fork(searchSagas.watchLoadSearch),
    fork(searchSagas.watchLoadSearchingValue),
    fork(playerSagas.watchPlayingAudio),
    fork(playerSagas.watchPausingAudio),
    fork(playerSagas.watchControlNextAudio),
    fork(playerSagas.watchControlPrevAudio),
    fork(playerSagas.watchUpdatingPlaylist),
    fork(playerSagas.watchPlayingPage),
    fork(playlistSagas.watchLoadPlaylist),
  ]);
}
