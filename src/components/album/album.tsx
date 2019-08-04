import * as React from "react";
import { IAlbum } from "src/models";

import "./album.scss";

import { AlbumHeader } from "../albumHeader";
import { Tracks } from "../tracks";

interface IAlbumComponentProps {
    album: IAlbum
}

const Album: React.FC<IAlbumComponentProps> = ({ album }) => {
    return (
        <div className="album">
            <AlbumHeader
                title={album.title}
                artist={album.artist}
                releaseDate={album.releaseDate || 2019}
                coverBigTrack={album.coverBigTrack}
                count={album.tracks.length}
            />
            <div className="album_tracks">
                <Tracks tracks={album.tracks} />
            </div>
        </div>
    )
};

export default Album;
