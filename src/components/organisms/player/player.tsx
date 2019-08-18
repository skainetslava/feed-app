import cls from "classnames";
import { Howl } from "howler";
import * as React from "react";

// import { IconLibrary } from "src/components/icons/library";
import { IconPause } from "src/components/icons/pause";
import { IconPlay } from "src/components/icons/play";

import { formateInMinutes } from "src/helpers/formateInMinutes";

import "./player.scss";

interface IPreviewProps {
    className?: string;
}

let audio: any; // global need for working of stop(), pause() :(


const Player: React.FC<IPreviewProps> = ({ className }) => {
    const [isPlaying, setPlay] = React.useState<boolean>(false);
    const [currentTime, setTime] = React.useState<number>(0);

    React.useEffect(() => {
        audio = new Howl({
            src: ["https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3"],
            loop: true,
        });
    }, [])

    React.useEffect(() => {
        syncCurrentTime();
        return clearTimeout(syncCurrentTime());
    }, [])

    const syncCurrentTime = () => {
        const timer = setInterval(() => {
            setTime(audio.seek().toFixed())
        }, 1000)

        return timer;
    }

    const playAudio = (): void => {
        if (isPlaying) {
            return;
        }

        audio.play();
        setPlay(true);
    }

    const pauseAudio = () => {
        if (!isPlaying) {
            return;
        }

        audio.pause();
        setPlay(false);
    }

    const leftPosition: number = audio ? 100 / audio.duration() * currentTime : 0;
    const currentDuration: string = formateInMinutes(currentTime);
    const duration: string = audio && formateInMinutes(audio.duration().toFixed());

    return (
        <div className={cls(className, "player")}>
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
            <div className="player_duration">
                <span className="player_duration_time">{currentDuration}</span>
                <div className="player_progress">
                    <div className="player_progress_base" style={{ width: `${leftPosition}%` }}></div>
                    <div className="player_progress_slider" style={{ left: `${leftPosition - 1}%` }}></div>
                </div>
                <span className="player_duration_time">{duration}</span>
            </div>
        </div>
    )
};

export default Player;
// https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3

// <button className="player_pause">
//     <IconLibrary w={36} h={36} />
// </button>