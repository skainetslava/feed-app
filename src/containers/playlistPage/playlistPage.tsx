import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import {
    CSSTransition,
} from "react-transition-group";

import { playPage } from "src/actions/artist";
import {
    fetchPlaylistData,
} from "src/actions/playlist";

import { Playlist } from "src/components/pages/playlist";
import { useBackground } from "src/containers/hooks/useBackground"

import { IPlaylist, ITrack } from "src/models";

import { getPlaylistPageData, getPlaylistPageLoadingStatus } from "src/reducers/playlist/selectors";

interface IRouteProps {
    id: string;
}

interface IPlaylistContainerProps extends RouteComponentProps<IRouteProps> {
    playlist?: IPlaylist,
    isLoading?: boolean,
    onFetchPlaylistData?: (id: string) => void;
    onPlayPage: (t: ITrack[]) => void;
}


const PlaylistPage: React.FC<IPlaylistContainerProps> = ({
    playlist,
    onFetchPlaylistData,
    onPlayPage,
    isLoading,
    match,
}) => {
    React.useEffect(() => {
        onFetchPlaylistData && onFetchPlaylistData(match.params.id)
    }, []);

    useBackground(match.params.id);

    const handlePlayPage = () => {
        playlist && playlist.tracks && onPlayPage(playlist.tracks)
    };

    return (
        <CSSTransition
            in={!isLoading}
            timeout={500}
            classNames="playlist-transition"
        >
            <Playlist playlist={playlist} playPlaylist={handlePlayPage} />
        </CSSTransition>
    );
};

const mapStateToProps = (state: IStore) => ({
    playlist: getPlaylistPageData(state),
    isLoading: getPlaylistPageLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchPlaylistData: (id: string) => dispatch(fetchPlaylistData(id)),
    onPlayPage: (tracks: ITrack[]) => dispatch(playPage(tracks)),
});


export default connect<{}, {}, IPlaylistContainerProps>(mapStateToProps, mapDispatchToProps)(React.memo(PlaylistPage));
