import cls from "classnames";
import * as React from "react";
import { useMoving } from "../useMoving";

import "./progressBar.scss";

interface IProgressBarProps {
  className?: string;
  currentDuration: string;
  leftPosition: number;
  duration: string;
  onChangeSeek: (v: number) => void;
}

const ProgressBar: React.FC<IProgressBarProps> = React.memo(
  ({ className, currentDuration, leftPosition, duration, onChangeSeek }) => {
    const progressRef = React.useRef<HTMLDivElement>(null);
    const { handleMouseUp, handleMouseDown, handleMouseMove, positionX } = useMoving({
      position: leftPosition,
      ref: progressRef,
      onChange: onChangeSeek,
    });

    return (
      <div className={cls(className, "player_duration")}>
        <span className="player_duration_time">{currentDuration}</span>
        <div
          className="progress"
          ref={progressRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="progress_base" style={{ width: `${positionX}%` }}></div>
          <div className="progress_slider" style={{ left: `${positionX - 1}%` }}></div>
        </div>
        <span className="player_duration_time">{duration}</span>
      </div>
    );
  }
);

export default ProgressBar;
