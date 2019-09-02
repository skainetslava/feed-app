import * as React from "react";
import { IAlbum, IArtist, ITrack } from "src/models";

import "./artist.scss";

import { Albums } from "src/components/albums";
import { Cover } from "src/components/organisms/cover";
import { Tracks } from "src/components/tracks";

interface IArtistComponentProps {
    artist: IArtist,
    tracks: ITrack[],
    albums: IAlbum[],
    onPlayPage: () => void
}

const Artist: React.FC<IArtistComponentProps> = ({ artist, tracks, albums, onPlayPage }) => {
    if (!artist) {
        return null;
    }

    return (
        <Cover
            title={artist.name}
            withActions={{
                onPlay: onPlayPage,
            }}
            image={artist.picture}
            listeners={artist.fans}
        >
            <div className="artist_tracks">
                <p className="artist_tracks_title">Popular</p>
                <Tracks className="artist_tracks_wrapper" tracks={tracks} />
            </div>
            {
                tracks.length > 0 &&
                <div className="artist_albums">
                    <p className="artist_albums_title">Albums</p>
                    <Albums className="artist_albums_wrapper" albums={albums} />
                </div>
            }
        </Cover >

    )
};

export default Artist;
