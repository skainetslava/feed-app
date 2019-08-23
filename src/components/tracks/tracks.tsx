import cls from "classnames";
import * as React from "react";

import "./tracks.scss";

import { Track } from "src/components/tracks/blocks/track";
import { ITrack } from "src/models";

interface ITracksProps {
    limit?: number;
    tracks?: ITrack[],
    className?: string,
    handlePlay?: (v: ITrack) => void
}

const Tracks: React.FC<ITracksProps> = ({ tracks, limit, className, handlePlay }) => {
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return tracks.slice(0, limit).map((track) => {
                return <Track track={track} key={track.id} handlePlay={handlePlay}/>;
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
