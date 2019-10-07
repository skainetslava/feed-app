import * as React from "react";

import { IconPlay } from "src/components/icons/play";
import { Button } from "src/components/organisms/button";

import "./playlistHeader.scss";

interface IPlaylistHeaderProps {
  coverBigTrack: string;
  title: string;
  count: number;
  playPlaylist: () => void;
}

const PlaylistHeader: React.FC<IPlaylistHeaderProps> = ({
  coverBigTrack,
  title,
  count,
  playPlaylist,
}) => {
  return (
    <div className="playlist-header">
      <div className="playlist-header_cover">
        <img className="playlist-header_img" src={coverBigTrack} alt={title} />
        <IconPlay className="playlist-header_cover_play" w={36} h={36} onClick={playPlaylist}/>
      </div>
      <section className="playlist-header_text">
        <div className="playlist-header_title">{title}</div>
      </section>
      <Button className="playlist-header_btn" title="Play" color="green" onClick={playPlaylist} />
      <section className="playlist-header_additional-info">
        <div>{count} songs</div>
      </section>
    </div>
  );
};

export default PlaylistHeader;
