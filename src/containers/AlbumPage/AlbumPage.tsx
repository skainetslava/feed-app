import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import {
    fetchAlbumData,
} from "src/actions/album";
import { Album } from "src/components/album";
import { IAlbum } from "src/models";
import { getAlbumData } from "src/reducers/selectors";

interface IRouteProps {
    id: string;
}

interface IAlbumContainerProps extends RouteComponentProps<IRouteProps> {
    album?: IAlbum,
    isLoading?: boolean,
    onFetchAlbumData?: (id: string) => void;
}

const AlbumPage: React.FC<IAlbumContainerProps> = ({ album, onFetchAlbumData, isLoading, match }) => {
    React.useEffect(() => {
        onFetchAlbumData && onFetchAlbumData(match.params.id)
    }, []);

    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }

    return (
        album ? <Album album={album} /> : renderLoading()
    );
};

const mapStateToProps = (state: IStore) => ({
    album: getAlbumData(state),
    // isLoading: getALoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchAlbumData: (id: string) => dispatch(fetchAlbumData(id)),
});


export default connect<{}, {}, IAlbumContainerProps>(mapStateToProps, mapDispatchToProps)(AlbumPage);
