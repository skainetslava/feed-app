import { fork, put, take, select } from "redux-saga/effects";

import { saveAudioToStore } from "src/actions/player";

import * as constants from "src/constants/actions/player";
import { ITrack } from "src/models";
import { getDuration } from 'src/reducers/selectors';
import { IStore } from 'src/store';
// import { IStore } from "src/store";

function* playAudioSaga(payload: ITrack) {
    // const state: IStore = yield select();
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