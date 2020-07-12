import cls from "classnames";
import * as React from "react";

import { IconPlaylist } from "src/components/icons/playlist";
import { IconVolume } from "src/components/icons/volume";
import { useMoving } from "../useMoving";

import "./volume.scss";

interface IVolumeProps {
  className?: string;
  volumeLevel: number;
  onChangeVolume: (position: number) => void;
  onClickPlaylist: () => void;
}

const Volume: React.FC<IVolumeProps> = React.memo(
  ({ className, volumeLevel, onChangeVolume, onClickPlaylist }) => {
    const progressRef = React.useRef<HTMLDivElement>(null);

    const { handleMouseUp, handleMouseDown, handleMouseMove, positionX } = useMoving({
      position: volumeLevel,
      ref: progressRef,
    });

    React.useEffect(() => {
      onChangeVolume(positionX);
    }, [positionX]);

    return (
      <div className={cls(className, "player_right-side")}>
        <IconPlaylist
          className="player_right-side_playlist-logo"
          w={20}
          h={20}
          onClick={onClickPlaylist}
        />
        <div className={cls(className, "player_volume")}>
          <IconVolume className="player_volume_logo" w={20} h={20} />
          <div
            ref={progressRef}
            className="progress"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div className="progress_base" style={{ width: `${positionX}%` }}></div>
            <div className="progress_slider" style={{ left: `${positionX - 10}%` }}></div>
          </div>
        </div>
      </div>
    );
  }
);

export default Volume;
