import * as React from 'react';
import { IconPlay } from 'src/components/icons/play'
import { formateInMinutes } from 'src/helpers/formateInMinutes';
import { ITrack } from 'src/models/track';
import './track.scss';

interface ITrackComponentProps {
    track: ITrack
}

const Track: React.FC<ITrackComponentProps> = ({ track }) => {
    return (
        <div className="track">
            <IconPlay className="track_play" w={16} h={16} />
            <img className="track_cover" src={track.coverSmallTrack} alt={track.title} />
            <p className="track_title">{track.title}</p>
            <p className="track_duration">{formateInMinutes(track.duration)}</p>
            <div className="track_artist">{track.artist}</div>
        </div>
    )
};

export default Track;
