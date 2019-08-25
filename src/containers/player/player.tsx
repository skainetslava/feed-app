import { Howl } from "howler";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Player } from "src/components/organisms/player";
import { ITrack } from "src/models";
import { IStore } from "src/store";


import {
    changeVolume,
    continueAudio,
    pauseAudio,
    prepareNextAudio,
    preparePrevAudio,
    updateDuration,
} from "src/actions/player";

import { formateInMinutes } from "src/helpers/formateInMinutes";

import {
    getCurrentAudio,
    getDuration,
    getPausingAudioStatus,
    getPlayerAudioStatus,
    getPlaylist,
    getVolume,
} from "src/reducers/selectors";


interface IPlayerContainerProps {
    currentAudio?: ITrack,
    timing?: number,
    volume?: number,
    isPlaying?: boolean,
    isPausing?: boolean,
    playlist?: ITrack[],
    onContinueAudio?: () => void,
    onPauseAudio?: () => void,
    onUpdateDuration?: (v: number) => void
    onChangeVolumePlayer?: (v: number) => void,
    onGoToPrevAudio?: () => void,
    onGoToNextAudio?: () => void,
}

let timer: any;
let audio: any; // global need for working of stop(), pause() :(

const PlayerContainer: React.FC<IPlayerContainerProps> = ({
    currentAudio,
    isPlaying = false,
    isPausing,
    timing = 0,
    playlist,
    volume = 100,
    onContinueAudio,
    onPauseAudio,
    onUpdateDuration,
    onChangeVolumePlayer,
    onGoToPrevAudio,
    onGoToNextAudio,
}) => {

    if (!currentAudio) {
        return null;
    }

    const isInitMount = React.useRef(true);

    React.useEffect(() => {
        audio && onPausePlayer();

        audio = new Howl({
            src: [currentAudio.preview],
            onend: handleNext,
        });

        if (isInitMount.current) {
            isInitMount.current = false;
        } else {
            onPlayPlayer();
            document.title = `${currentAudio.artist} - ${currentAudio.title}`
        }

        return (() => {
            clearInterval(timer)
        });
    }, [currentAudio.preview])


    React.useEffect(() => {
        if (isInitMount.current) {
            isInitMount.current = false;
        } else {
            !isPausing ? onPlayPlayer() : onPausePlayer();
        }
        return (() => {
            clearInterval(timer)
        });
    }, [isPausing])

    React.useEffect(() => {
        audio.volume(volume / 100)
    }, [volume])

    const syncCurrentTime = (): void => {
        timer = setInterval(() => {
            onUpdateDuration && onUpdateDuration(Math.round(audio.seek()))
        }, 1000)
    }

    const onPlayPlayer = (): void => {
        clearInterval(timer);
        syncCurrentTime();
        audio.seek(timing);
        audio.play();
    }

    const onPausePlayer = (): void => {
        audio.pause();
        clearInterval(timer);
    }

    const handleChangeVolume = (event: React.MouseEvent<HTMLDivElement>) => {
        const currentTargetRect = event.currentTarget.getBoundingClientRect();
        const offsetX: number = event.pageX - currentTargetRect.left;

        onChangeVolumePlayer && onChangeVolumePlayer(offsetX);
    }

    const handlePlay = (): void => {
        onContinueAudio && onContinueAudio();
        clearInterval(timer)
    }

    const handlePause = (): void => {
        onPauseAudio && onPauseAudio();
        clearInterval(timer)
    }

    const handleNext = (): void => {
        onGoToNextAudio && onGoToNextAudio();
        clearInterval(timer)
    }

    const handlePrev = (): void => {
        onGoToPrevAudio && onGoToPrevAudio();
        clearInterval(timer)
    }

    const leftPosition: number = audio ? 100 / audio.duration() * timing : 100 / 31 * timing;
    const currentDuration: string = formateInMinutes(timing);
    const duration: string = audio
        ? formateInMinutes(audio.duration().toFixed())
        : formateInMinutes(currentAudio.duration);

    return (
        <Player
            track={currentAudio}
            isPlaying={isPlaying}
            duration={duration}
            currentDuration={currentDuration}
            positionTrack={leftPosition}
            pauseAudio={handlePause}
            playAudio={handlePlay}
            nextAudio={handleNext}
            prevAudio={handlePrev}
            volumeLevel={volume}
            handleChangeVolume={handleChangeVolume}
        />
    );
};

const mapStateToProps = (state: IStore) => ({
    currentAudio: getCurrentAudio(state),
    isPlaying: getPlayerAudioStatus(state),
    playlist: getPlaylist(state),
    timing: getDuration(state),
    isPausing: getPausingAudioStatus(state),
    volume: getVolume(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onContinueAudio: () => dispatch(continueAudio()),
    onPauseAudio: () => dispatch(pauseAudio()),
    onUpdateDuration: (time: number) => dispatch(updateDuration(time)),
    onChangeVolumePlayer: (value: number) => dispatch(changeVolume(value)),
    onGoToPrevAudio: () => dispatch(preparePrevAudio()),
    onGoToNextAudio: () => dispatch(prepareNextAudio()),
});


export default connect<{}, {}, IPlayerContainerProps>(mapStateToProps, mapDispatchToProps)(PlayerContainer);
