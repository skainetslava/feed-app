import cls from "classnames";
import * as React from "react";

import { Controls } from "./blocks/controls";
import { ProgressBar } from "./blocks/progress-bar";
import { Volume } from "./blocks/volume";

import { ITrack } from "src/models";
import { TrackInfo } from "./blocks/info";
import "./player.scss";

interface IPreviewProps {
    isPlaying: boolean;
    className?: string;
    positionTrack: number;
    currentDuration: string;
    duration: string;
    volumeLevel: number;
    track: ITrack;
    pauseAudio: () => void;
    playAudio: () => void;
    handleChangeVolume: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Player: React.FC<IPreviewProps> = ({
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
}) => {
    return (
        <div className={cls(className, "player")}>
            <TrackInfo artist={track.artist} title={track.title} img={track.coverSmallTrack || ""} />
            <Controls
                isPlaying={isPlaying}
                pauseAudio={pauseAudio}
                playAudio={playAudio}
            />
            <ProgressBar
                leftPosition={positionTrack}
                currentDuration={currentDuration}
                duration={duration}
            />
            <Volume volumeLevel={volumeLevel} handleChangeVolume={handleChangeVolume}/>
        </div>
    )
};

export default Player;