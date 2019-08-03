import * as React from "react";
import { IAlbum } from "src/models";

import "./album.scss";

import { AlbumHeader } from "../albumHeader";
import { ChartTracks } from "../chartTracks";

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
            />
            <ChartTracks tracks={album.tracks} />
        </div>
    )
};

export default Album;
