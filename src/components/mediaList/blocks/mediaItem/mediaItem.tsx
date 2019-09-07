import * as React from "react";
import { IconPlay } from "src/components/icons/play"
import { IAlbum, IPlaylist } from "src/models";

import { Link } from "react-router-dom";
import "./mediaItem.scss";

interface IMediaItemComponentProps {
    mediaItem: IAlbum & IPlaylist;
    type: "album" | "playlist";
}

const MediaItem: React.FC<IMediaItemComponentProps> = ({ type, mediaItem }) => {
    return (
        <div >
            <Link to={`/${type}/${mediaItem.id}`} className="media-item">
                <div className="media-item_cover">
                    <IconPlay className="media-item_play" w={36} h={36} />
                    <img className="media-item_cover" src={mediaItem.coverBigTrack} alt={mediaItem.title} />
                </div>
                <p className="media-item_title">{mediaItem.title}</p>
                {mediaItem.artist && <div className="media-item_artist">{mediaItem.artist}</div>}
            </Link>
        </div>
    )
};

export default MediaItem;
