import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStore } from 'src/store';

import {
    fetchChartRequest,
    IChartAction,
} from 'src/actions/chart';

import { IChart } from 'src/reducers/chart';
import { getChart } from 'src/reducers/selectors';

interface IChartContainerProps {
    dispatch?: any;
    tracks?: IChart[];
    onFetchChart?: () => void;
}

const ChartPage: React.FC<IChartContainerProps> = ({ tracks, onFetchChart }) => {
    React.useEffect(() => {
        onFetchChart && onFetchChart();
    }, []);

    return (
        <div>
            {
                tracks && tracks.length > 0 && tracks.map((item, index) => {
                    return <div key={index}>{item.label}</div>;
                })
            }
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getChart(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
    onFetchChart: () => dispatch(fetchChartRequest()),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(ChartPage);
