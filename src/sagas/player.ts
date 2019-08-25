import { fork, put, select, take } from "redux-saga/effects";

import { saveAudioToStore } from "src/actions/player";

import * as constants from "src/constants/actions/player";
import { ITrack } from "src/models";
import { getDuration } from "src/reducers/selectors";
import { IStore } from "src/store";

function* playAudioSaga(payload: ITrack) {
    localStorage.setItem("audio", JSON.stringify(payload));
    yield put(saveAudioToStore(payload));
}

export function* watchPlayingAudio() {
    while (true) {
        const { payload } = yield take(constants.PLAY_AUDIO);
        yield fork(playAudioSaga, payload);
    }
}

export function* watchPausingAudio() {
    while (true) {
        yield take(constants.PAUSE_AUDIO);
        const state: IStore = yield select();
        localStorage.setItem("timingAudio", JSON.stringify(getDuration(state)));
    }
}

export function* findNextTrack() {
    const state: IStore = yield select();
    const { player: { playlist, source } } = state;
    const currentTrack = source && source.id;

    let nextIndex: number = 0;

    currentTrack && playlist.map((item, index) => {
        if (item.id === currentTrack && index !== playlist.length - 1) {
            nextIndex = index + 1;
        }
    })

    const nextTrack = state.player.playlist[nextIndex];
    yield playAudioSaga(nextTrack);
}

export function* findPrevTrack() {
    const state: IStore = yield select();
    const { player: { playlist, source } } = state;
    const currentTrack = source && source.id;

    let prevIndex: number = 0;

    currentTrack && playlist.map((item, index) => {
        if (item.id === currentTrack && index !== playlist.length - 1) {
            prevIndex = index - 1;
        }
    })

    const nextTrack = state.player.playlist[prevIndex];
    yield playAudioSaga(nextTrack);
}

export function* watchControlNextAudio() {
    while (true) {
        yield take(constants.NEXT_AUDIO_REQUEST);
        yield fork(findNextTrack);
    }
}

export function* watchControlPrevAudio() {
    while (true) {
        yield take(constants.PREV_AUDIO_REQUEST);
        yield fork(findPrevTrack);
    }
}

export function* watchUpdatingPlaylist() {
    while (true) {
        const { payload } = yield take(constants.UPDATE_PLAYLIST);
        localStorage.setItem("playlist", JSON.stringify(payload));
    }
}