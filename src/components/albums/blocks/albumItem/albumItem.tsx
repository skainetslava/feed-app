import * as React from "react";
import { IconPlay } from "src/components/icons/play"
import { IAlbum } from "src/models";

import { Link } from "react-router-dom";
import "./albumItem.scss";

interface IAlbumComponentProps {
    album: IAlbum
}

const Album: React.FC<IAlbumComponentProps> = ({ album }) => {
    return (
        <div >
            <Link to={`/album/${album.id}`} className="album-item">
                <div className="album-item_cover">
                    <IconPlay className="album-item_play" w={36} h={36} />
                    <img className="album-item_cover" src={album.coverBigTrack} alt={album.title} />
                </div>
                <p className="album-item_title">{album.title}</p>
                <div className="album-item_artist">{album.artist}</div>
            </Link>
        </div>
    )
};

export default Album;
