import * as React from "react";
// import { IAlbum } from "src/models";

import { IconPlay } from "../icons/play";
import { Button } from "../organisms/button";
import "./albumHeader.scss";

interface IAlbumHeaderProps {
    coverBigTrack: string;
    title: string;
    artist: string;
    releaseDate: number;
}

const AlbumHeader: React.FC<IAlbumHeaderProps> = ({ coverBigTrack, title, artist, releaseDate }) => {
    return (
        <div className="album-header">
            <div className="album-header_cover">
                <img className="album-header_img" src={coverBigTrack} alt="" />
                <div className="album-header_wrapper"></div>
                <IconPlay className="album-header_cover_play" w={36} h={36} />
            </div>

            <section className="album-header_text">
                <div className="album-header_title">{title}</div>
                <div className="album-header_artist">{artist}</div>
            </section>
            <Button className="album-header_btn" title="Play" color="green" />
            <section className="album-header_additional-info">
                <div className="album-header_release-date">{releaseDate}</div>
                &ensp;•&ensp;
                <div>6 songs</div>
            </section>
        </div>
    )
};

export default AlbumHeader;
