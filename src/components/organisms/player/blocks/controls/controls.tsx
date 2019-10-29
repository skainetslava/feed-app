import cls from "classnames";
import * as React from "react";

import { IconControlNext } from "src/components/icons/control-next";
import { IconControlPrev } from "src/components/icons/control-prev";
import { IconPause } from "src/components/icons/pause";
import { IconPlay } from "src/components/icons/play";
import { IconRepeat } from "src/components/icons/repeat";
import { IconShuffle } from "src/components/icons/shuffle";

import "./controls.scss";

interface IControlsProps {
  isPlaying: boolean;
  isRepeat: boolean;
  isShuffled: boolean;
  className?: string;
  onPlayAudio: () => void;
  onPauseAudio: () => void;
  onPrevAudio: () => void;
  onNextAudio: () => void;
  onRepeatAudio: () => void;
  onShufflePlaylist: () => void;
}

const Controls: React.FC<IControlsProps> = ({
  className,
  isPlaying,
  isShuffled,
  isRepeat,
  onPlayAudio,
  onPauseAudio,
  onNextAudio,
  onPrevAudio,
  onRepeatAudio,
  onShufflePlaylist,
}) => {
  return (
    <div className={cls(className, "player_controls")}>
      <IconShuffle
        className={cls("player_shuffle", { "player_shuffle--active": isShuffled })}
        w={14}
        h={14}
        onClick={onShufflePlaylist}
      />
      <IconControlPrev className="player_prev" w={13} h={12} onClick={onPrevAudio} />
      {!isPlaying && (
        <button className="player_play" onClick={onPlayAudio} aria-label="play">
          <IconPlay w={18} h={18} />
        </button>
      )}
      {isPlaying && (
        <button className="player_pause" onClick={onPauseAudio} aria-label="pause">
          <IconPause w={18} h={18} />
        </button>
      )}
      <IconControlNext className="player_next" w={12} h={12} onClick={onNextAudio} />
      <IconRepeat
        className={cls("player_repeat", { "player_repeat--active": isRepeat })}
        w={14}
        h={14}
        onClick={onRepeatAudio}
      />
    </div>
  );
};

export default React.memo(Controls);
