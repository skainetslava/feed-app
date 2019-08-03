import * as React from "react";

import "./chartTracks.scss";

import { Track } from "src/components/track";
import { ITrack } from "src/models";

interface IChartTracksProps {
    tracks?: ITrack[]
}

const ChartTracks: React.FC<IChartTracksProps> = ({ tracks }) => {
    console.log(tracks);
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return tracks.map((track) => {
                return <Track track={track} key={track.id} />;
            })

        }

        return <div>Empty list</div>;
    }


    return (
        <div className="tracks">
            {renderTracks()}
        </div>
    )
};

export default ChartTracks;
