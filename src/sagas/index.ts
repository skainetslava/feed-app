import { all, fork } from "redux-saga/effects";

import { watchLoadAlbum } from "./album";
import { watchLoadArtist } from "./artist";
import { watchLoadChart } from "./chart";
import { watchLoadSearch, watchLoadSearchingValue } from "./search";

export default function* rootSaga() {
  yield all([
    fork(watchLoadChart),
    fork(watchLoadAlbum),
    fork(watchLoadArtist),
    fork(watchLoadSearch),
    fork(watchLoadSearchingValue),
  ]);
}
