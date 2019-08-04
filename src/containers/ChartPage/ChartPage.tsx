import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import {
    fetchChartRequest,
    IChartAction,
} from "src/actions/chart";
import { Cover } from "src/components/organisms/cover";
import { Tracks } from "src/components/tracks";
import { ITrack } from "src/models";
import { getChartLoadingStatus, getChartTracks } from "src/reducers/selectors";

interface IChartContainerProps {
    dispatch?: any;
    tracks?: ITrack[];
    isLoading?: boolean,
    onFetchChart?: () => void;
}

const ChartPage: React.FC<IChartContainerProps> = ({ tracks, onFetchChart, isLoading }) => {
    React.useEffect(() => {
        if (!tracks || tracks.length === 0) {
            onFetchChart && onFetchChart();
        }
    }, [tracks]);

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
        <Cover image={getTitleImage()} withActions={true} title="Most popular songs">
            {!isLoading ? <Tracks className="chart-tracks" tracks={tracks} /> : renderLoading()}
        </Cover >
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getChartTracks(state),
    isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
    onFetchChart: () => dispatch(fetchChartRequest()),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(ChartPage);
