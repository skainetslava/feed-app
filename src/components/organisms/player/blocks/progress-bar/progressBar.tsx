import cls from "classnames";
import * as React from "react";

import "./progressBar.scss";

interface IProgressBarProps {
    className?: string;
    currentDuration: string;
    leftPosition: number;
    duration: string;
}

const ProgressBar: React.FC<IProgressBarProps> = React.memo(({
    className,
    currentDuration,
    leftPosition,
    duration,
}) => {
    return (
        <div className={cls(className, "player_duration")}>
            <span className="player_duration_time">{currentDuration}</span>
            <div className="progress">
                <div className="progress_base" style={{ width: `${leftPosition}%` }}></div>
                <div className="progress_slider" style={{ left: `${leftPosition - 1}%` }}></div>
            </div>
            <span className="player_duration_time">{duration}</span>
        </div>
    )
});

export default ProgressBar;