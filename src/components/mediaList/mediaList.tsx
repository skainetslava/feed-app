import cls from "classnames";
import * as React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./mediaList.scss";

import { MediaItem } from "src/components/mediaList/blocks/mediaItem";
import { MockMediaList } from "src/components/mock/media";
import { IAlbum, IPlaylist } from "src/models";

interface IMediaListProps {
  type: "album" | "playlist";
  list?: IAlbum[] & IPlaylist[];
  className?: string;
}

const MediaList: React.FC<IMediaListProps> = ({ type, list, className }) => {
  const renderMediaList = () => {
    if (list && list.length > 0) {
      return (
        <TransitionGroup className={cls(className, "media-list")}>
          {list.map(item => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="item">
                <MediaItem mediaItem={item} type={type} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      );
    }
    return <MockMediaList  />;
  };

  return <div>{renderMediaList()}</div>;
};

export default MediaList;
