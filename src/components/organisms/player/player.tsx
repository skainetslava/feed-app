import cls from "classnames";
import { Howl } from "howler";
import * as React from "react";

import { Controls } from "./blocks/controls";
import { ProgressBar } from "./blocks/progress-bar";
import { Volume } from "./blocks/volume";

import { formateInMinutes } from "src/helpers/formateInMinutes";

import "./player.scss";
import { TrackInfo } from './blocks/info';

const img = "https://cdns-images.dzcdn.net/images/cover/9232336ac18a40019e543f9d6a270039/500x500-000000-80-0-0.jpg";
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
        return (() => clearTimeout(syncCurrentTime()));
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
            <TrackInfo artist={"Twenty One Pilots"} title={"Stressed out"} img={img} />
            <Controls
                isPlaying={isPlaying}
                pauseAudio={pauseAudio}
                playAudio={playAudio}
            />
            <ProgressBar
                leftPosition={leftPosition}
                currentDuration={currentDuration}
                duration={duration}
            />
            <Volume volumeLevel={leftPosition} />
        </div>
    )
};

export default Player;
// https://cdns-preview-b.dzcdn.net/stream/c-be897cd6f8f1c730f02fa9b5a11f6bb6-1.mp3

// <button className="player_pause">
//     <IconLibrary w={36} h={36} />
// </button>