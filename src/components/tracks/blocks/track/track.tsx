import cls from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { IconPlay } from "src/components/icons/play"
import { formateInMinutes } from "src/helpers/formateInMinutes";
import { ITrack } from "src/models";

import { IconVolume } from "src/components/icons/volume";
import CurrentAudioContext from "src/context";
import "./track.scss";
import { IconPause } from 'src/components/icons/pause';

interface ITrackComponentProps {
    track?: ITrack,
    timing?: number,
    isPlaying?: boolean,
    onPlayAudio?: (t: ITrack) => void,
    onContinueAudio?: () => void,
    onPauseAudio?: () => void,
}

const Track: React.FC<ITrackComponentProps> = ({
    track,
    timing,
    isPlaying,
    onPlayAudio,
    onContinueAudio,
    onPauseAudio,
}) => {
    const currentId = React.useContext(CurrentAudioContext);

    if (!track) {
        return null;
    }

    const isActive = currentId === track.id;

    return (
        <div className={cls("track", { "track--active": isActive }, { "track--playing": isPlaying })}>

            {isPlaying && isActive &&
                <IconVolume
                    className="track_on"
                    onClick={() => onPauseAudio && onPauseAudio()} />
            }
            {!isActive &&
                <IconPlay
                    className={cls("track_play")}
                    onClick={() => onPlayAudio && onPlayAudio(track)} />
            }
            {!isPlaying && isActive &&
                <IconPlay
                    className={cls("track_play", {
                        "track_play--active": isActive,
                    })}
                    onClick={() => onContinueAudio && onContinueAudio()} />
            }
            <IconPause
                className={cls("track_pause")}
                onClick={() => onPauseAudio && onPauseAudio()}
            />

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
