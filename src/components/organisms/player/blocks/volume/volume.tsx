import cls from "classnames";
import * as React from "react";

import { IconPlaylist } from "src/components/icons/playlist";
import { IconVolume } from "src/components/icons/volume";

import "./volume.scss";

interface IVolumeProps {
    className?: string;
    volumeLevel: number;
    handleChangeVolume: (e: React.MouseEvent<HTMLDivElement>) => void
    handleClickPlaylist: () => void
}

const Volume: React.FC<IVolumeProps> = React.memo(({
    className,
    volumeLevel,
    handleChangeVolume,
    handleClickPlaylist,
}) => {
    return (
        <div className={cls(className, "player_right-side")}>
            <IconPlaylist className="player_right-side_playlist-logo" w={20} h={20} onClick={handleClickPlaylist}/>
            <div className={cls(className, "player_volume")}>
                <IconVolume className="player_volume_logo" w={20} h={20} />
                <div className="progress" onClick={handleChangeVolume}>
                    <div className="progress_base" style={{ width: `${volumeLevel}%` }}></div>
                    <div className="progress_slider" style={{ left: `${volumeLevel - 1}%` }}></div>
                </div>
            </div>
        </div>
    )
});

export default Volume;