import { fork, put, select, take } from "redux-saga/effects";
import { setItemFromLocalStorage } from "src/helpers/fromLocalStorage";
import { ITrack } from "src/models";
import { PLAY_PAGE } from "../artist/types";
import { IStore } from "../store";
import { saveAudioToStore } from "./actions";
import { getDuration } from "./selectors";
import {
  NEXT_AUDIO_REQUEST,
  PAUSE_AUDIO,
  PLAY_AUDIO,
  PREV_AUDIO_REQUEST,
  UPDATE_PLAYLIST,
} from "./types";

function* playAudioSaga(payload: ITrack) {
  setItemFromLocalStorage("audio", payload);
  yield put(saveAudioToStore(payload));
}

export function* watchPlayingAudio() {
  while (true) {
    const { payload } = yield take(PLAY_AUDIO);
    yield fork(playAudioSaga, payload);
  }
}

export function* watchPausingAudio() {
  while (true) {
    yield take(PAUSE_AUDIO);
    const state: IStore = yield select();
    setItemFromLocalStorage("timingAudio", getDuration(state));
  }
}

export function* findNextTrack() {
  const state: IStore = yield select();
  const {
    player: { playlist, source },
  } = state;
  const currentTrack = source && source.id;

  let nextIndex: number = 0;

  currentTrack &&
    playlist.map((item, index) => {
      if (item.id === currentTrack && index !== playlist.length - 1) {
        nextIndex = index + 1;
      }
    });

  const nextTrack = state.player.playlist[nextIndex];
  yield playAudioSaga(nextTrack);
}

export function* findPrevTrack() {
  const state: IStore = yield select();
  const {
    player: { playlist, source },
  } = state;
  const currentTrack = source && source.id;

  let prevIndex: number = 0;

  currentTrack &&
    playlist.map((item, index) => {
      if (item.id === currentTrack && index !== playlist.length - 1) {
        prevIndex = index - 1;
      }
    });

  const nextTrack = state.player.playlist[prevIndex];
  yield playAudioSaga(nextTrack);
}

export function* watchControlNextAudio() {
  while (true) {
    yield take(NEXT_AUDIO_REQUEST);
    yield fork(findNextTrack);
  }
}

export function* watchControlPrevAudio() {
  while (true) {
    yield take(PREV_AUDIO_REQUEST);
    yield fork(findPrevTrack);
  }
}

export function* watchUpdatingPlaylist() {
  while (true) {
    const { payload } = yield take(UPDATE_PLAYLIST);
    payload.length && setItemFromLocalStorage("playlist", payload);
  }
}

export function* watchPlayingPage() {
  while (true) {
    const { payload } = yield take(PLAY_PAGE);
    setItemFromLocalStorage("audio", payload[0]);
    setItemFromLocalStorage("playlist", payload);
  }
}
