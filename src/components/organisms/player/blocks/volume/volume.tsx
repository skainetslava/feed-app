import cls from "classnames";
import * as React from "react";

import { IconPlaylist } from "src/components/icons/playlist";
import { IconVolume } from "src/components/icons/volume";

import "./volume.scss";

interface IVolumeProps {
    className?: string;
    volumeLevel: number;
    onChangeVolume: (e: React.MouseEvent<HTMLDivElement>) => void
    onClickPlaylist: () => void
}

const Volume: React.FC<IVolumeProps> = React.memo(({
    className,
    volumeLevel,
    onChangeVolume,
    onClickPlaylist,
}) => {
    return (
        <div className={cls(className, "player_right-side")}>
            <IconPlaylist className="player_right-side_playlist-logo" w={20} h={20} onClick={onClickPlaylist}/>
            <div className={cls(className, "player_volume")}>
                <IconVolume className="player_volume_logo" w={20} h={20} />
                <div className="progress" onClick={onChangeVolume}>
                    <div className="progress_base" style={{ width: `${volumeLevel}%` }}></div>
                    <div className="progress_slider" style={{ left: `${volumeLevel - 1}%` }}></div>
                </div>
            </div>
        </div>
    )
});

export default Volume;