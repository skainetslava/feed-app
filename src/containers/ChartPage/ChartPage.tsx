import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStore } from 'src/store';

import {
    fetchChartRequest,
    IChartAction,
} from 'src/actions/chart';
import { ChartTracks } from 'src/components/chartTracks';
import { Cover } from 'src/components/organisms/cover';
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

    const getTitleImage = (): string | undefined => {
        if (tracks && tracks.length > 0) {
            return tracks[0].coverBigTrack;
        }

        return undefined;
    }

    return (
        <Cover image={getTitleImage()}>
            {!isLoading ? <ChartTracks tracks={tracks} /> : renderLoading()}
        </Cover >
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