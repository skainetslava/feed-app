import cls from "classnames";
import * as React from "react";

import { IconControlNext } from "src/components/icons/control-next";
import { IconControlPrev } from "src/components/icons/control-prev";
import { IconPause } from "src/components/icons/pause";
import { IconPlay } from "src/components/icons/play";

import "./controls.scss";

interface IControlsProps {
    isPlaying: boolean;
    className?: string;
    playAudio: () => void;
    pauseAudio: () => void;
    prevAudio: () => void;
    nextAudio: () => void;
}

const Controls: React.FC<IControlsProps> = React.memo(({
    className,
    isPlaying,
    playAudio,
    pauseAudio,
    nextAudio,
    prevAudio,
}) => {
    return (
        <div className={cls(className, "player_controls")}>
            <IconControlPrev  className="player_prev"w={13} h={12} onClick={prevAudio}/>
            {
                !isPlaying && <button className="player_play" onClick={playAudio}>
                    <IconPlay w={18} h={18} />
                </button>
            }
            {
                isPlaying && <button className="player_pause" onClick={pauseAudio}>
                    <IconPause w={18} h={18} />
                </button>
            }
            <IconControlNext className="player_next" w={12} h={12} onClick={nextAudio}/>
        </div>
    )
});

export default Controls;