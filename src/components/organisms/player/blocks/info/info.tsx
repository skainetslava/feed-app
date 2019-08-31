import cls from "classnames";
import * as React from "react";

import { Link } from "react-router-dom";
import "./info.scss";

interface ITrackInfoProps {
    className?: string;
    title: string;
    artist: string;
    artistId: number;
    img: string;
}

const TrackInfo: React.FC<ITrackInfoProps> = ({ className, title, artist, artistId, img }) => {
    return (
        <div className={cls(className, "player_info")}>
            <img className="player_info_img" src={img} alt={artist} />
            <div className="player_info_text">
                <p className="player_info_title">{title}</p>
                <Link to={`/artist/${artistId}`}><p className="player_info_artist">{artist}</p></Link>
            </div>
        </div>
    )
};

export default TrackInfo;