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
}

const Player: React.FC<IPreviewProps> = ({
    className,
    isPlaying,
    positionTrack,
    currentDuration,
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
            <Volume volumeLevel={volumeLevel} />
        </div>
    )
};

export default Player;
// https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3

// <button className="player_pause">
//     <IconLibrary w={36} h={36} />
// </button>