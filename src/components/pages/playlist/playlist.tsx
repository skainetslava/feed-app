import * as React from "react";
import { IPlaylist } from "src/models";

import "./playlist.scss";

import { Tracks } from "../../tracks";
import { PlaylistHeader } from "./blocks/playlistHeader";

interface IPlaylistComponentProps {
    playlist?: IPlaylist,
    playPlaylist: () => void
}

const Playlist: React.FC<IPlaylistComponentProps> = ({ playlist, playPlaylist }) => {
    if (!playlist) {
        return null;
    }

    return (
        <div className="playlist">
            <PlaylistHeader
                title={playlist.title}
                coverBigTrack={playlist.coverBigTrack}
                count={playlist.tracks ? playlist.tracks.length : 0}
                playPlaylist={playPlaylist}
            />
            <div className="playlist_tracks">
                <Tracks tracks={playlist.tracks} />
            </div>
        </div>
    )
};

export default Playlist;
