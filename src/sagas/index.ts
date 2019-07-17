import {
    all,
    fork,
} from 'redux-saga/effects';

import { watchLoadChart } from './chart';

export default function* rootSaga() {
    yield all([
        fork(watchLoadChart),
    ]);
}
