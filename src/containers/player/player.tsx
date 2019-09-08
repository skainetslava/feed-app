import { Howl } from "howler";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    CSSTransition,
} from "react-transition-group";

import { PlaylistModal } from "src/containers/playlistModal";

import { Player } from "src/components/organisms/player";
import { Modal } from "src/components/organisms/portalModal";

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

const initialAudio: ITrack = {
    id: 0,
    artistId: 0,
    preview: "",
    artist: "",
    title: "",
    duration: 0,
}

const PlayerContainer: React.FC<IPlayerContainerProps> = ({
    currentAudio = initialAudio,
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
        currentAudio = initialAudio;
    }

    const isInitMount = React.useRef(true);
    const [isShowPlaylist, setShowPlaylist] = React.useState<boolean>(false);

    React.useEffect(() => {
        audio && onPausePlayer();

        audio = new Howl({
            src: [currentAudio.preview],
            onend: handleNext,
            volume: volume / 100,
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
        if (!currentAudio.preview) {
            return;
        }
        onContinueAudio && onContinueAudio();
        clearInterval(timer)
    }

    const handlePause = (): void => {
        onPauseAudio && onPauseAudio();
        clearInterval(timer)
    }

    const handleNext = (): void => {
        if (!playlist || playlist.length === 0) {
            return;
        }
        onGoToNextAudio && onGoToNextAudio();
        clearInterval(timer)
    }

    const handlePrev = (): void => {
        if (!playlist || playlist.length === 0) {
            return;
        }
        onGoToPrevAudio && onGoToPrevAudio();
        clearInterval(timer)
    }

    const handleClickPlaylist = (): void => {
        setShowPlaylist(!isShowPlaylist);
    }

    const leftPosition: number = audio ? 100 / audio.duration() * timing : 100 / 31 * timing;
    const currentDuration: string = formateInMinutes(timing);
    const duration: string = audio
        ? formateInMinutes(audio.duration().toFixed())
        : formateInMinutes(currentAudio.duration);

    return (
        <>
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
                handleClickPlaylist={handleClickPlaylist}
            />

            <CSSTransition
                in={isShowPlaylist}
                timeout={500}
                classNames="playlist-transition"
            >
                <>
                    {isShowPlaylist &&
                        <Modal>
                            <PlaylistModal handleClose={handleClickPlaylist} />
                        </Modal>
                    }
                </>
            </CSSTransition>
        </>
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


export default connect<{}, {}, IPlayerContainerProps>(mapStateToProps, mapDispatchToProps)(React.memo(PlayerContainer));
