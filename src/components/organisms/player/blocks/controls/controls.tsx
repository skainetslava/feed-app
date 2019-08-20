import * as React from "react";
import cls from "classnames";

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
}

const Controls: React.FC<IControlsProps> = ({ className, isPlaying, playAudio, pauseAudio }) => {
    return (
        <div className={cls(className, "player_controls")}>
            <IconControlPrev w={13} h={12} />
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
            <IconControlNext w={12} h={12} />
        </div>
    )
};

export default Controls;