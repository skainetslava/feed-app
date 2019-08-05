import * as React from "react";
import { IArtist } from "src/models";

import "./artist.scss";

import { Cover } from "src/components/organisms/cover";
// import { Tracks } from "../tracks";

interface IArtistComponentProps {
    artist: IArtist
}

const Artist: React.FC<IArtistComponentProps> = ({ artist }) => {
    return (
        <div className="artist">
            <Cover title={artist.name} withActions={true} image={artist.picture}>
                
            </Cover >
        </div>
    )
};

export default Artist;
