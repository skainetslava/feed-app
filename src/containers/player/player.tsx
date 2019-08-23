import { Howl } from "howler";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Player } from "src/components/organisms/player";
import { ITrack } from "src/models";
import { IStore } from "src/store";


import { continueAudio, pauseAudio, updateDuration } from "src/actions/player";
import { formateInMinutes } from "src/helpers/formateInMinutes";
import { getCurrentAudio, getDuration, getPlayerAudioStatus, getPlaylist } from "src/reducers/selectors";


interface IPlayerContainerProps {
    currentAudio?: ITrack,
    timing?: number,
    isPlaying?: boolean,
    playlist?: ITrack[],
    onContinueAudio?: () => void,
    onPauseAudio?: () => void,
    onUpdateDuration?: (v: number) => void
}

let timer: any;
let audio: any; // global need for working of stop(), pause() :(

const PlayerContainer: React.FC<IPlayerContainerProps> = ({
    currentAudio,
    isPlaying = false,
    timing = 0,
    playlist,
    onContinueAudio,
    onPauseAudio,
    onUpdateDuration,
}) => {

    if (!currentAudio) {
        return null;
    }

    const isInitMount = React.useRef(true);

    React.useEffect(() => {
        audio && handlePause();

        audio = new Howl({
            src: [currentAudio.preview],
            loop: true,
        });

        if (isInitMount.current) {
            isInitMount.current = false;
        } else {
            handlePlay();
        }

        return (() => {
            clearInterval(timer)
        });
    }, [currentAudio.preview])

    const syncCurrentTime = () => {
        timer = setInterval(() => {
            onUpdateDuration && onUpdateDuration(Math.round(audio.seek()))
        }, 1000)
    }

    const handlePlay = (): void => {
        syncCurrentTime();
        audio.seek(timing);
        audio.play();
        onContinueAudio && onContinueAudio();
    }

    const handlePause = () => {
        audio.pause();
        clearInterval(timer);
        onPauseAudio && onPauseAudio();
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
            volumeLevel={0}
        />
    );
};

const mapStateToProps = (state: IStore) => ({
    currentAudio: getCurrentAudio(state),
    isPlaying: getPlayerAudioStatus(state),
    playlist: getPlaylist(state),
    timing: getDuration(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onContinueAudio: () => dispatch(continueAudio()),
    onPauseAudio: () => dispatch(pauseAudio()),
    onUpdateDuration: (time: number) => dispatch(updateDuration(time)),
});


export default connect<{}, {}, IPlayerContainerProps>(mapStateToProps, mapDispatchToProps)(PlayerContainer);
