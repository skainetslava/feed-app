import * as React from "react";

import { IconPlay } from "src/components/icons/play";
import { Button } from "src/components/organisms/button";

import "./albumHeader.scss";

interface IAlbumHeaderProps {
  coverBigTrack: string;
  title: string;
  artist?: string;
  releaseDate: number;
  count: number;
  playAlbum: () => void;
}

const AlbumHeader: React.FC<IAlbumHeaderProps> = ({
  coverBigTrack,
  title,
  artist,
  releaseDate,
  count,
  playAlbum,
}) => {
  return (
    <div className="album-header">
      <div className="album-header_cover">
        <img className="album-header_img" src={coverBigTrack} alt={title} />
        <IconPlay className="album-header_cover_play" w={36} h={36} onClick={playAlbum}/>
      </div>

      <section className="album-header_text">
        <div className="album-header_title">{title}</div>
        {artist && <div className="album-header_artist">{artist}</div>}
      </section>
      <Button className="album-header_btn" title="Play" color="green" onClick={playAlbum} />
      <section className="album-header_additional-info">
        <div className="album-header_release-date">{releaseDate}</div>
        &ensp;•&ensp;
        <div>{count} songs</div>
      </section>
    </div>
  );
};

export default AlbumHeader;
