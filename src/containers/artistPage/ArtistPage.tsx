import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";

import {
    fetchArtistData,
} from "src/actions/artist";
import { Artist } from "src/components/pages/artist";
import { IAlbum, IArtist, ITrack } from "src/models";
import { getArtistAlbums, getArtistData, getArtistMostPopularTracks } from "src/reducers/selectors";

interface IRouteProps {
    id: string;
}

interface IArtistContainerProps extends RouteComponentProps<IRouteProps> {
    artist: IArtist,
    tracks: ITrack[],
    albums: IAlbum[],
    isLoading?: boolean,
    onFetchArtistData?: (id: string) => void;
}

const ArtistPage: React.FC<IArtistContainerProps> = ({ artist, tracks, albums, onFetchArtistData, isLoading, match }) => {
    React.useEffect(() => {
        onFetchArtistData && onFetchArtistData(match.params.id)
    }, [match.params.id]);

    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }
    console.log(tracks);
    return (
        artist ? <Artist artist={artist} tracks={tracks} albums={albums} /> : renderLoading()
    );
};

const mapStateToProps = (state: IStore) => ({
    artist: getArtistData(state),
    tracks: getArtistMostPopularTracks(state),
    albums: getArtistAlbums(state),
    // isLoading: getALoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchArtistData: (id: string) => dispatch(fetchArtistData(id)),
});


export default connect<{}, {}, IArtistContainerProps>(mapStateToProps, mapDispatchToProps)(ArtistPage);
