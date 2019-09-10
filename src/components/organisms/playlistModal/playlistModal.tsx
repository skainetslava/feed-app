import * as React from "react";
import { ITrack } from "src/models";

import "./playlistModal.scss";

import { Tracks } from "src/components/tracks";

interface IPlaylistModalComponentProps {
    tracks?: ITrack[];
    ref: React.RefObject<HTMLDivElement>;
    handleClose: () => void;
}

const PlaylistModal =  React.forwardRef<HTMLDivElement, IPlaylistModalComponentProps>(({ tracks, handleClose}, ref) => {
    return (
        <div className="playlist-modal_content" ref={ref}>
            <p className="playlist-modal_close" onClick={handleClose}>Close</p>
            <p className="playlist-modal_title">Play Queue</p>
            <Tracks tracks={tracks} isPlaylist={true} />
        </div>
    )
});

export default React.memo(PlaylistModal);
