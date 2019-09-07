import * as React from "react";

import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";

import {
    fetchArtistData, playPage,
} from "src/actions/artist";

import { Artist } from "src/components/pages/artist";
import { IAlbum, IArtist, ITrack } from "src/models";

import {
    getArtistAlbums,
    getArtistData,
    getArtistLoadingStatus,
    getArtistMostPopularTracks,
} from "src/reducers/selectors";

interface IRouteProps {
    id: string;
}

interface IArtistContainerProps extends RouteComponentProps<IRouteProps> {
    artist: IArtist,
    tracks: ITrack[],
    albums: {
        albums: IAlbum[],
        singles: IAlbum[],
    },
    isLoading?: boolean,
    onFetchArtistData?: (id: string) => void;
    onPlayPage: (t: ITrack[]) => void
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

    const isInitMount = React.useRef(true);

    React.useEffect(() => {
        if (isInitMount.current) {
            isInitMount.current = false;
        } else {
            onFetchArtistData && onFetchArtistData(match.params.id)
        }
    }, [match.params.id]);

    React.useLayoutEffect(() => {
        onFetchArtistData && onFetchArtistData(match.params.id)
    }, []);

    const handlePlayArtist = () => {
        onPlayPage(tracks);
    }

    return (
        <CSSTransition
            in={!isLoading}
            timeout={500}
            classNames="transition"
        >
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
    artist: getArtistData(state),
    tracks: getArtistMostPopularTracks(state),
    albums: getArtistAlbums(state),
    isLoading: getArtistLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchArtistData: (id: string) => dispatch(fetchArtistData(id)),
    onPlayPage: (tracks: ITrack[]) => dispatch(playPage(tracks)),
});


export default connect<{}, {}, IArtistContainerProps>(mapStateToProps, mapDispatchToProps)(ArtistPage);
