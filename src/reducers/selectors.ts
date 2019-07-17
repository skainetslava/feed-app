
import { createSelector } from 'reselect';

import { IStore } from 'src/store';

const CHART_TRACKS = (state: IStore) => state.chart.tracks;

export const getChart = createSelector(
    [CHART_TRACKS],
    (tracks) => tracks && tracks,
);
