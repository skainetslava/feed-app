
import { createSelector } from 'reselect';

import { IStore } from 'src/store';

const CHART_TRACKS = (state: IStore) => state.chart.tracks;

export const getChart = createSelector(
    [CHART_TRACKS],
    (tracks) => tracks && tracks,
);

const CHART_STATUS = (state: IStore) => state.chart.isLoading;

export const getChartLoadingStatus = createSelector(
    [CHART_STATUS],
    (isLoading) => isLoading,
)
