import cls from "classnames";
import * as React from "react";

import "./albums.scss";

import { Album } from "src/components/albumItem";
import { IAlbum } from "src/models";

interface IAlbumsProps {
    albums?: IAlbum[],
    className?: string,
}

const Albums: React.FC<IAlbumsProps> = ({ albums, className }) => {
    const renderAlbums = () => {
        if (albums && albums.length > 0) {
            return albums.map((album) => {
                return <Album album={album} key={album.id} />;
            })
        }
        return <div>Empty list</div>;
    }

    return (
        <div className={cls(className, "albums")}>
            {renderAlbums()}
        </div>
    )
};

export default Albums;
