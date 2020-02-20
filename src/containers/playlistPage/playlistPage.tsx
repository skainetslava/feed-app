import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/redux/store";

import { RouteComponentProps } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { artistActions } from "src/redux/artist";
import { playlistActions, playlistSelectors  } from "src/redux/playlist";

import { Playlist } from "src/components/pages/playlist";
import { useBackground } from "src/containers/hooks/useBackground";

import { IPlaylist, ITrack } from "src/models";


interface IRouteProps {
  id: string;
}

interface IPlaylistContainerProps extends RouteComponentProps<IRouteProps> {
  playlist?: IPlaylist;
  isLoading?: boolean;
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
    onFetchPlaylistData && onFetchPlaylistData(match.params.id);
  }, []);

  useBackground(match.params.id);

  const handlePlayPage = () => {
    playlist && playlist.tracks && onPlayPage(playlist.tracks);
  };

  return (
    <CSSTransition in={!isLoading} timeout={500} classNames="playlist-transition">
      <Playlist playlist={playlist} onPlayPlaylist={handlePlayPage} />
    </CSSTransition>
  );
};

const mapStateToProps = (state: IStore) => ({
  playlist: playlistSelectors.getPlaylistPageData(state),
  isLoading: playlistSelectors.getPlaylistPageLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetchPlaylistData: (id: string) => dispatch(playlistActions.fetchPlaylistData(id)),
  onPlayPage: (tracks: ITrack[]) => dispatch(artistActions.playPage(tracks)),
});

export default connect<{}, {}, IPlaylistContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(PlaylistPage));
