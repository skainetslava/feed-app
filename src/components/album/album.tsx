import * as React from "react";
import { IconPlay } from "src/components/icons/play"
import { IAlbum } from "src/models";

import { Link } from "react-router-dom";
import "./album.scss";

interface IAlbumComponentProps {
    album: IAlbum
}

const Album: React.FC<IAlbumComponentProps> = ({ album }) => {
    return (
        <div className="album">
            <Link to={`/album/${album.id}`}>
                <div className="album_cover">
                    <IconPlay className="album_play" w={36} h={36} />
                    <img className="album_cover" src={album.coverBigTrack} alt={album.title} />
                </div>
                <p className="album_title">{album.title}</p>
                <div className="album_artist">{album.artist}</div>
            </Link>
        </div>
    )
};

export default Album;
