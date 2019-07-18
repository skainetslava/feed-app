import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStore } from 'src/store';

import {
    fetchChartRequest,
    IChartAction,
} from 'src/actions/chart';

import { ChartTracks } from 'src/components/chartTracks';
import { ITrack } from 'src/models/track';
import { getChart, getChartLoadingStatus } from 'src/reducers/selectors';

interface IChartContainerProps {
    dispatch?: any;
    tracks?: ITrack[];
    isLoading?: boolean,
    onFetchChart?: () => void;
}

const ChartPage: React.FC<IChartContainerProps> = ({ tracks, onFetchChart, isLoading }) => {
    React.useEffect(() => {
        onFetchChart && onFetchChart();
    }, []);

    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }

    return (
        <div>
            <>
                {!isLoading ? <ChartTracks tracks={tracks} /> : renderLoading()}
            </>
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getChart(state),
    isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
    onFetchChart: () => dispatch(fetchChartRequest()),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(ChartPage);
