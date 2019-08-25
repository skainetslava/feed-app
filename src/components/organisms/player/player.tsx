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
    className?: string;
    positionTrack: number;
    currentDuration: string;
    duration: string;
    volumeLevel: number;
    track: ITrack;
    pauseAudio: () => void;
    playAudio: () => void;
    prevAudio: () => void;
    nextAudio: () => void;
    handleChangeVolume: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Player: React.FC<IPlayerProps> = ({
    className,
    isPlaying,
    positionTrack,
    currentDuration,
    handleChangeVolume,
    volumeLevel,
    duration,
    track,
    pauseAudio,
    playAudio,
    nextAudio,
    prevAudio,
}) => {
    return (
        <div className={cls(className, "player")}>
            <TrackInfo
                artist={track.artist}
                title={track.title}
                img={track.coverBigTrack || track.coverSmallTrack || ""}
            />
            <Controls
                isPlaying={isPlaying}
                pauseAudio={pauseAudio}
                playAudio={playAudio}
                nextAudio={nextAudio}
                prevAudio={prevAudio}
            />
            <ProgressBar
                leftPosition={positionTrack}
                currentDuration={currentDuration}
                duration={duration}
            />
            <Volume volumeLevel={volumeLevel} handleChangeVolume={handleChangeVolume} />
        </div>
    )
};

export default Player;