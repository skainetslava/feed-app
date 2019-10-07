import * as React from "react";
import { IAlbum } from "src/models";

import "./album.scss";

import { MockAlbumHeader } from "src/components/mock/albumHeader";
import { Tracks } from "../../tracks";
import { AlbumHeader } from "./blocks/albumHeader";

interface IAlbumComponentProps {
  album?: IAlbum;
  onPlayAlbum: () => void;
}

const Album: React.FC<IAlbumComponentProps> = ({ album, onPlayAlbum }) => {
  return (
    <div className="album">
      {album ? (
        <AlbumHeader
          title={album.title}
          artist={album.artist}
          releaseDate={album.releaseDate || 2019}
          coverBigTrack={album.coverBigTrack}
          count={album.tracks ? album.tracks.length : 0}
          playAlbum={onPlayAlbum}
        />
      ) : (
        <MockAlbumHeader />
      )}
      <div className="album_tracks">
        <Tracks tracks={album ? album.tracks : []} />
      </div>
    </div>
  );
};

export default Album;
