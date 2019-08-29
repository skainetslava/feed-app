import { all, fork } from "redux-saga/effects";

import { watchLoadAlbum } from "./album";
import { watchLoadArtist } from "./artist";
import { watchLoadChart } from "./chart";
import {
  watchControlNextAudio,
  watchControlPrevAudio,
  watchPausingAudio,
  watchPlayingAudio,
  watchPlayingPage,
  watchUpdatingPlaylist,
} from "./player";
import { watchLoadSearch, watchLoadSearchingValue } from "./search";

export default function* rootSaga() {
  yield all([
    fork(watchLoadChart),
    fork(watchLoadAlbum),
    fork(watchLoadArtist),
    fork(watchLoadSearch),
    fork(watchLoadSearchingValue),
    fork(watchPlayingAudio),
    fork(watchPausingAudio),
    fork(watchControlNextAudio),
    fork(watchControlPrevAudio),
    fork(watchUpdatingPlaylist),
    fork(watchPlayingPage),
  ]);
}
