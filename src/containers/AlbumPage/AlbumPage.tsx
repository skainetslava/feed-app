import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from 'react-router-dom';
import {
    fetchAlbumData,
    // IGetAlbumAction,
} from "src/actions/album";
// import { Album } from "src/components/album";
import { IAlbum } from "src/models";
import { getAlbumData } from "src/reducers/selectors";

interface IAlbumContainerProps {
    dispatch?: any;
    id: number,
    album?: IAlbum[],
    isLoading?: boolean,
    onFetchAlbumData?: () => void;
}
const AlbumPage: React.FC<IAlbumContainerProps & RouteComponentProps> =
    ({ dispatch, album, onFetchAlbumData, isLoading, match }) => {
        // React.useEffect(() => {

        // }, []);

        // const renderLoading = (): JSX.Element => {
        //     return <div>Loading...</div>
        // }

        return (
            // {!isLoading ? <Album albums={albums} /> : renderLoading()}
            <div>{match.params.id}</div>
        );
    };

const mapStateToProps = (state: IStore) => ({
    album: getAlbumData(state),
    // isLoading: getALoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchAlbumData: () => dispatch(fetchAlbumData()),
});


export default connect<{}, {}, IAlbumContainerProps>(mapStateToProps, mapDispatchToProps)(AlbumPage);
