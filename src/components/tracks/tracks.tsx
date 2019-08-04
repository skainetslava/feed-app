import * as React from "react";
import cls from 'classnames';

import "./tracks.scss";

import { Track } from "src/components/track";
import { ITrack } from "src/models";

interface ITracksProps {
    tracks?: ITrack[],
    className?: string
}

const Tracks: React.FC<ITracksProps> = ({ tracks, className }) => {
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return tracks.map((track) => {
                return <Track track={track} key={track.id} />;
            })

        }

        return <div>Empty list</div>;
    }


    return (
        <div className={cls(className, "tracks")}>
            {renderTracks()}
        </div>
    )
};

export default Tracks;
