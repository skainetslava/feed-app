import cls from "classnames";
import * as React from "react";
import { IconPlay } from "src/components/icons/play"

import { Link } from "react-router-dom";
import "./preview.scss";

interface IPreviewProps {
    id: number,
    className?: string;
    cover?: string;
    title?: string;
    artist: string;
    type: "artist" | "album";
}

const Preview: React.FC<IPreviewProps> = React.memo(({ id, className, cover, title, artist, type }) => {
    const shapeClass = type === "album" ? "preview_square" : "preview_circle";
    return (
        <Link to={`/${type}/${id}`}>
            <div className={cls(className, "preview")}>
                <div className={cls(shapeClass, "preview_cover")}>
                    <IconPlay className="preview_play" w={36} h={36} />
                    <img className={cls(shapeClass, "preview_img")} src={cover} alt={title} />
                </div>
                {title && <p className="preview_title">{title}</p>}
                <div className="preview_artist">{artist}</div>
            </div>
        </Link>
    )
});

export default Preview;
