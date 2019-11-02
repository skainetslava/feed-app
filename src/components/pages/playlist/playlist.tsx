import * as React from "react";
import { IPlaylist } from "src/models";

import "./playlist.scss";

import { MockAlbumHeader } from "src/components/mock/albumHeader";
import { Tracks } from "../../tracks";
import { PlaylistHeader } from "./blocks/playlistHeader";

interface IPlaylistComponentProps {
  playlist?: IPlaylist;
  onPlayPlaylist: () => void;
}

const Playlist: React.FC<IPlaylistComponentProps> = ({ playlist, onPlayPlaylist }) => {
  return (
    <div className="playlist">
      {playlist ? (
        <PlaylistHeader
        title={playlist.title}
        coverBigTrack={playlist.coverBigTrack}
        count={playlist.tracks ? playlist.tracks.length : 0}
        playPlaylist={onPlayPlaylist}
      />
      ) : (
        <MockAlbumHeader />
      )}
      <div className="playlist_tracks">
        <Tracks tracks={playlist ? playlist.tracks : []} />
      </div>
    </div>
  );
};

export default Playlist;
