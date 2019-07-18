import * as React from 'react';

import './chartTracks.scss';

import { ITrack } from 'src/models/track';

interface IChartTracksProps {
    tracks?: ITrack[]
}

const ChartTracks: React.FC<IChartTracksProps> = ({ tracks }) => {
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return tracks.map((item) => {
                return <div key={item.id}>{item.title}</div>;
            })

        }

        return <div>Empty list</div>;
    }


    return (
        <div>
            {renderTracks()}
        </div>
    )
};

export default ChartTracks;
