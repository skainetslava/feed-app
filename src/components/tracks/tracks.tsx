import cls from "classnames";
import * as React from "react";

import "./tracks.scss";

import { TrackContainer } from "src/containers/track";
import { ITrack } from "src/models";

interface ITracksProps {
    limit?: number;
    tracks?: ITrack[],
    className?: string,
}

const Tracks: React.FC<ITracksProps> = ({ tracks, limit, className }) => {
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return tracks.slice(0, limit).map((track) => {
                return <TrackContainer track={track} key={track.id} />;
            })
        }
        return null;
    }

    return (
        <div className={cls(className, "tracks")}>
            {renderTracks()}
        </div>
    )
};

export default Tracks;
