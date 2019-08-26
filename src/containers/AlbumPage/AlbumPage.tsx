import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import {
    fetchAlbumData,
} from "src/actions/album";
import { Album } from "src/components/pages/album";
import { IAlbum, ITrack } from "src/models";
import { getAlbumData } from "src/reducers/selectors";
import { playPage } from 'src/actions/artist';

interface IRouteProps {
    id: string;
}

interface IAlbumContainerProps extends RouteComponentProps<IRouteProps> {
    album?: IAlbum,
    isLoading?: boolean,
    onFetchAlbumData?: (id: string) => void;
    onPlayPage: (t: ITrack[]) => void;
}

const AlbumPage: React.FC<IAlbumContainerProps> = ({ album, onFetchAlbumData, onPlayPage, isLoading, match }) => {
    React.useEffect(() => {
        onFetchAlbumData && onFetchAlbumData(match.params.id)
    }, []);

    const handlePlayPage = () => {
        album && album.tracks && onPlayPage(album.tracks)
    }

    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }

    return (
        album ? <Album album={album} playAlbum={handlePlayPage} /> : renderLoading()
    );
};

const mapStateToProps = (state: IStore) => ({
    album: getAlbumData(state),
    // isLoading: getALoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchAlbumData: (id: string) => dispatch(fetchAlbumData(id)),
    onPlayPage: (tracks: ITrack[]) => dispatch(playPage(tracks)),
});


export default connect<{}, {}, IAlbumContainerProps>(mapStateToProps, mapDispatchToProps)(AlbumPage);
