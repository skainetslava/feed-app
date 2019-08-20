import cls from "classnames";
import * as React from "react";

import { IconVolume } from "src/components/icons/volume";

import "./volume.scss";

interface IVolumeProps {
    className?: string;
    volumeLevel: number;
}

const Volume: React.FC<IVolumeProps> = ({ className, volumeLevel }) => {
    return (
        <div className={cls(className, "player_volume")}>
            <IconVolume className="player_volume_logo" w={20} h={20} />
            <div className="progress">
                <div className="progress_base" style={{ width: `${volumeLevel}%` }}></div>
                <div className="progress_slider" style={{ left: `${volumeLevel - 1}%` }}></div>
            </div>
        </div>
    )
};

export default Volume;