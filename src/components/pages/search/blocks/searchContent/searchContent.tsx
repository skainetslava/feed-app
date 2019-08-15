import * as React from "react";
import { IArtist, ITrack } from "src/models";

import { Preview } from "src/components/organisms/preview";
import { Tracks } from "src/components/tracks";

import "./searchContent.scss";

interface ISearchComponentProps {
    tracks?: ITrack[],
    artists?: IArtist[],
}

const SearchContent: React.FC<ISearchComponentProps> = ({ tracks, artists }) => {
    const renderTracks = (): JSX.Element | null => {
        if (!tracks || tracks.length === 0) {
            return null;
        }

        const previewTrack = tracks[0];
        return (
            <>
                <div className="search_tracks">
                    <Preview
                        className="search_tracks_top-result"
                        id={previewTrack.id}
                        title={previewTrack.title}
                        artist={previewTrack.artist}
                        cover={previewTrack.coverBigTrack}
                        type="album"
                    />
                    <Tracks tracks={tracks} className="search_tracks_items" />
                </div>
            </>
        );
    }

    const renderAlbums = (): JSX.Element | null => {
        if (!artists || artists.length === 0) {
            return null;
        }

        return (
            <>
                <p className="search_artists_title">Artists</p>
                <div className="search_artists">
                    {
                        artists.map((artist) => {
                            return (
                                <Preview
                                    id={artist.id}
                                    key={artist.id}
                                    artist={artist.name}
                                    cover={artist.picture}
                                    type="artist"
                                />
                            )
                        })
                    }
                </div>
            </>
        );
    }

    return (
            <div className="search_content">
                {renderTracks()}
                {renderAlbums()}
            </div>
    )
};

export default SearchContent;
