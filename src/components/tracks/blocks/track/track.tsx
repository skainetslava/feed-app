import * as React from "react";
import { Link } from "react-router-dom";

import { IconPlay } from "src/components/icons/play"
import { formateInMinutes } from "src/helpers/formateInMinutes";
import { ITrack } from "src/models";

import UserContext from "src/context";
import "./track.scss";

interface ITrackComponentProps {
    track: ITrack,
    handlePlay?: (t: ITrack) => void
}

const Track: React.FC<ITrackComponentProps> = ({ track, handlePlay }) => {
    const user = React.useContext(UserContext);
    
    return (
        <div className="track">
            <IconPlay className="track_play" w={16} h={16} onClick={() => handlePlay && handlePlay(track)}/>
            {track.coverSmallTrack && <img className="track_cover" src={track.coverSmallTrack} alt={track.title} />}
            <div className="track_info">
                <p className="track_title">{track.title}</p>
                <Link to={`/artist/${track.artistId}`} className="track_artist">{track.artist}</Link>
            </div>
            <p className="track_duration">{formateInMinutes(track.duration)}</p>

        </div>
    )
};

export default Track;
