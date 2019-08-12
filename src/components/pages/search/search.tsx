import * as React from "react";
import { ITrack, IArtist } from "src/models";

import { Input } from "src/components/organisms/input";
import { Preview } from "src/components/organisms/preview";
import { Tabs } from "src/components/organisms/tabs";
import { Tracks } from "src/components/tracks";
import { TABS_SEARCH } from "src/constants/tabs";

import "./search.scss";

interface ISearchComponentProps {
    tracks?: ITrack[],
    artists: IArtist[],
    onChangeInput: (v: string) => void
}

const Search: React.FC<ISearchComponentProps> = ({ tracks, artists, onChangeInput }) => {
    const renderTracks = () => {
        if (!tracks || tracks.length === 0) {
            return null;
        }

        const previewTrack = tracks[0];
        return (
            <div className="search">
                <Tabs className="search_tracks_tabs" tabs={TABS_SEARCH} />
                <div className="search_tracks">
                    <Preview
                        title={previewTrack.title}
                        artist={previewTrack.artist}
                        cover={previewTrack.coverBigTrack}
                        type="album"
                    />
                    <Tracks tracks={tracks} className="search_tracks_items" />
                </div>
                <p className="search_artists_title">Artists</p>
                <div className="search_artists">
                    {
                        artists && artists.length > 0 && artists.map((artist) => {
                            return (
                                <Preview
                                    artist={artist.name}
                                    cover={artist.picture}
                                    type="artist"
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="search">
            <Input placeholder="Start typing..." onChange={onChangeInput} />
            {renderTracks()}
        </div>
    )
};

export default Search;
