import * as React from "react";
import { ITrack } from "src/models";

import { Input } from "src/components/organisms/input";
import { Tracks } from "src/components/tracks";
import "./search.scss";

interface ISearchComponentProps {
    tracks?: ITrack[],
    onChangeInput: (v: string) => void
}

const Search: React.FC<ISearchComponentProps> = ({ tracks, onChangeInput }) => {
    return (
        <div>
            <Input placeholder="Start typing..." onChange={onChangeInput} />
            <Tracks tracks={tracks} />
        </div>

    )
};

export default Search;
