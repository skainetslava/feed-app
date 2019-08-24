import * as React from "react";
import { IAlbum, IArtist, ITrack } from "src/models";

import "./artist.scss";

import { Albums } from "src/components/albums";
import { Cover } from "src/components/organisms/cover";
import { Tracks } from "src/components/tracks";
// import { Tracks } from "../tracks";

interface IArtistComponentProps {
    artist: IArtist,
    tracks: ITrack[],
    albums: IAlbum[],
}

const Artist: React.FC<IArtistComponentProps> = ({ artist, tracks, albums }) => {
    return (
        <Cover title={artist.name} withActions={true} image={artist.picture} listeners={artist.fans}>
            <div className="artist_tracks">
                <p className="artist_tracks_title">Popular</p>
                <Tracks className="artist_tracks_wrapper" tracks={tracks} />
            </div>
            <div className="artist_albums">
                <p className="artist_albums_title">Albums</p>
                <Albums className="artist_albums_wrapper" albums={albums} />
            </div>
        </Cover >

    )
};

export default Artist;
