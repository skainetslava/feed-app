import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import {
    fetchChartRequest,
    IChartAction,
} from "src/actions/chart";

import { Albums } from "src/components/albums";
import { Cover } from "src/components/organisms/cover";

import { IAlbum } from "src/models";

import { getChartAlbums, getChartLoadingStatus } from "src/reducers/selectors";

interface IAlbumsChartContainerProps {
    dispatch?: any;
    albums?: IAlbum[],
    isLoading?: boolean,
    onFetchChart?: () => void;
}

const AlbumsChartPage: React.FC<IAlbumsChartContainerProps> = ({ albums, onFetchChart, isLoading }) => {
    React.useEffect(() => {
        if (!albums || albums.length === 0) {
            onFetchChart && onFetchChart();
        }
    }, [albums]);


    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }

    return (
        <Cover
            withActions={null}
            hasTabs={true}>
            {!isLoading ? <Albums className="albums-chart" albums={albums} /> : renderLoading()}
        </Cover >
    );
};

const mapStateToProps = (state: IStore) => ({
    albums: getChartAlbums(state),
    isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
    onFetchChart: () => dispatch(fetchChartRequest()),
});


export default connect<{}, {}, IAlbumsChartContainerProps>(mapStateToProps, mapDispatchToProps)(AlbumsChartPage);
