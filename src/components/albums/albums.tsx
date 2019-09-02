import cls from "classnames";
import * as React from "react";

import {
    CSSTransition,
    TransitionGroup,
} from "react-transition-group";

import "./albums.scss";

import { Album } from "src/components/albums/blocks/albumItem";
import { IAlbum } from "src/models";

interface IAlbumsProps {
    albums?: IAlbum[],
    className?: string,
}

const Albums: React.FC<IAlbumsProps> = ({ albums, className }) => {
    const renderAlbums = () => {
        if (albums && albums.length > 0) {
            return <TransitionGroup  className={cls(className, "albums")}>
                {albums.map((album) => {
                    return (
                        <CSSTransition
                            key={album.id}
                            timeout={500}
                            classNames="item"
                        >
                            <Album album={album} />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        }
        return <div>Empty list</div>;
    }

    return (
        <div>
            {renderAlbums()}
        </div>
    )
};

export default Albums;
