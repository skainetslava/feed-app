import cls from "classnames";
import { Howl } from "howler";
import * as React from "react";

// import { IconLibrary } from "src/components/icons/library";
import { IconPlay } from "src/components/icons/play";

import { IconLibrary } from "src/components/icons/library";
import "./player.scss";

interface IPreviewProps {
    className?: string;
}

let audio: any; // global need for working of stop, pause :(


const Player: React.FC<IPreviewProps> = ({ className }) => {
    const [isPlaying, setPlay] = React.useState<boolean>(false);
    const [currentTime, setTime] = React.useState<number>(0);
    let timer: number;

    React.useEffect(() => {
        audio = new Howl({
            src: ["https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3"],
            loop: true,
        });
    }, [])

    const syncCurrentTime = () => {
        setInterval(() => {
            setTime(audio.seek().toFixed())
        }, 1000)
    }

    React.useEffect(() => {
        syncCurrentTime();

       // return clearTimeout(timer);
    }, [])

    const playAudio = () => {
        if (!isPlaying) {
            audio.play();
            setPlay(true);
        }
    }

    const pauseAudio = () => {
        if (isPlaying) {
            audio.pause();
            setPlay(false);
        }
    }
    const leftPosition = audio ? 100 / audio.duration() * currentTime  : 0;
    return (
        <div className={cls(className, "player")}>
            {
                !isPlaying && <button className="player_play" onClick={playAudio}>
                    <IconPlay w={36} h={36} />
                </button>
            }
            {
                isPlaying && <button className="player_pause" onClick={pauseAudio}>
                    <IconLibrary w={36} h={36} />
                </button>
            }
            <div className="player_duration">
                <span className="player_duration_time">{audio ? currentTime : "-"}</span>
                <div className="player_progress">
                <div className="player_progress_base" style={{left: `${leftPosition}%`}}></div>
                </div>
                <span className="player_duration_time">{audio ? audio.duration() : "-"}</span>
            </div>
        </div>
    )
};

export default Player;
// https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3

<button className="player_pause">
    <IconLibrary w={36} h={36} />
</button>