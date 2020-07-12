import cls from "classnames";
import * as React from "react";

import { Controls } from "./blocks/controls";
import { ProgressBar } from "./blocks/progress-bar";
import { Volume } from "./blocks/volume";

import { ITrack } from "src/models";
import { TrackInfo } from "./blocks/info";
import "./player.scss";

interface IPlayerProps {
  isPlaying: boolean;
  isRepeat: boolean;
  isShuffled: boolean;
  className?: string;
  positionTrack: number;
  currentDuration: string;
  duration: string;
  volumeLevel: number;
  track: ITrack;
  onPauseAudio: () => void;
  onPlayAudio: () => void;
  onPrevAudio: () => void;
  onNextAudio: () => void;
  onRepeatAudio: () => void;
  onShufflePlaylist: () => void;
  onChangeVolume: (position: number) => void;
  onClickPlaylist: () => void;
  onChangeSeek: (v: number) => void;
}

const Player: React.FC<IPlayerProps> = ({
  className,
  isPlaying,
  isRepeat,
  isShuffled,
  positionTrack,
  currentDuration,
  onChangeVolume,
  onClickPlaylist,
  volumeLevel,
  duration,
  track,
  onPlayAudio,
  onPauseAudio,
  onNextAudio,
  onPrevAudio,
  onRepeatAudio,
  onShufflePlaylist,
  onChangeSeek,
}) => {
  return (
    <div className={cls(className, "player")}>
      <TrackInfo
        artist={track.artist}
        artistId={track.artistId}
        title={track.title}
        img={track.coverBigTrack || track.coverSmallTrack || ""}
      />
      <Controls
        isPlaying={isPlaying}
        isRepeat={isRepeat}
        isShuffled={isShuffled}
        onPauseAudio={onPauseAudio}
        onPlayAudio={onPlayAudio}
        onNextAudio={onNextAudio}
        onPrevAudio={onPrevAudio}
        onShufflePlaylist={onShufflePlaylist}
        onRepeatAudio={onRepeatAudio}
      />
      <ProgressBar
        leftPosition={positionTrack}
        currentDuration={currentDuration}
        duration={duration}
        onChangeSeek={onChangeSeek}
      />
      <Volume
        volumeLevel={volumeLevel}
        onChangeVolume={onChangeVolume}
        onClickPlaylist={onClickPlaylist}
      />
    </div>
  );
};

export default Player;
