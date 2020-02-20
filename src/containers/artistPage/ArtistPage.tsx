import * as React from "react";

import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Dispatch } from "redux";
import { IStore } from "src/redux/store";

import { RouteComponentProps } from "react-router-dom";

import { Artist } from "src/components/pages/artist";
import { IAlbum, IArtist, ITrack } from "src/models";

import {
  artistActions,
  artistSelectors,
} from "src/redux/artist";

interface IRouteProps {
  id: string;
}

interface IArtistContainerProps extends RouteComponentProps<IRouteProps> {
  artist: IArtist;
  tracks: ITrack[];
  albums: {
    albums: IAlbum[];
    singles: IAlbum[];
  };
  isLoading?: boolean;
  onFetchArtistData?: (id: string) => void;
  onPlayPage: (t: ITrack[]) => void;
}

const ArtistPage: React.FC<IArtistContainerProps> = ({
  artist,
  tracks,
  albums: { albums, singles },
  onFetchArtistData,
  isLoading,
  match,
  onPlayPage,
}) => {
  React.useEffect(() => {
    onFetchArtistData && onFetchArtistData(match.params.id);
  }, [match.params.id]);

  const handlePlayArtist = () => {
    onPlayPage(tracks);
  };

  return (
    <CSSTransition in={!isLoading} timeout={500} classNames="transition">
      <Artist
        artist={artist}
        tracks={tracks}
        albums={albums}
        singles={singles}
        onPlayPage={handlePlayArtist}
      />
    </CSSTransition>
  );
};

const mapStateToProps = (state: IStore) => ({
  artist: artistSelectors.getArtistData(state),
  tracks: artistSelectors.getArtistMostPopularTracks(state),
  albums: artistSelectors.getArtistAlbums(state),
  isLoading: artistSelectors.getArtistLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetchArtistData: (id: string) => dispatch(artistActions.fetchArtistData(id)),
  onPlayPage: (tracks: ITrack[]) => dispatch(artistActions.playPage(tracks)),
});

export default connect<{}, {}, IArtistContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(ArtistPage));
