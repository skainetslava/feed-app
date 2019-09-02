import * as React from "react";
import { IAlbum } from "src/models";

import "./album.scss";

import { Tracks } from "../../tracks";
import { AlbumHeader } from "./blocks/albumHeader";

interface IAlbumComponentProps {
    album?: IAlbum,
    playAlbum: () => void
}

const Album: React.FC<IAlbumComponentProps> = ({ album, playAlbum }) => {
    if (!album) {
        return null;
    }

    return (
        <div className="album">
            <AlbumHeader
                title={album.title}
                artist={album.artist}
                releaseDate={album.releaseDate || 2019}
                coverBigTrack={album.coverBigTrack}
                count={album.tracks ? album.tracks.length : 0}
                playAlbum={playAlbum}
            />
            <div className="album_tracks">
                <Tracks tracks={album.tracks} />
            </div>
        </div>
    )
};

export default Album;
