import { Howl } from "howler";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CSSTransition } from "react-transition-group";

import { PlaylistModal } from "src/containers/playlistModal";

import { Player } from "src/components/organisms/player";
import { Modal } from "src/components/organisms/portalModal";

import { ITrack } from "src/models";
import { IStore } from "src/redux/store";

import { playerActions, playerSelectors } from "src/redux/player";

import { formateInMinutes } from "src/helpers/formateInMinutes";
import { useAnimationFrame } from "./hooks";

interface IPlayerContainerProps {
  currentAudio?: ITrack;
  timing?: number;
  volume?: number;
  isPlaying?: boolean;
  isPausing?: boolean;
  isRepeat?: boolean;
  isShuffled?: boolean;
  playlist?: ITrack[];
  onContinueAudio?: () => void;
  onPauseAudio?: () => void;
  onUpdateDuration?: (v: number) => void;
  onChangeVolumePlayer?: (v: number) => void;
  onGoToPrevAudio?: () => void;
  onGoToNextAudio?: () => void;
  onShufflePlaylist?: () => void;
  onRepeatAudio?: () => void;
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
};

const PlayerContainer: React.FC<IPlayerContainerProps> = ({
  currentAudio = initialAudio,
  isPlaying = false,
  isPausing,
  timing = 0,
  playlist,
  volume = 100,
  isShuffled,
  isRepeat,
  onContinueAudio,
  onPauseAudio,
  onUpdateDuration,
  onChangeVolumePlayer,
  onGoToPrevAudio,
  onGoToNextAudio,
  onShufflePlaylist,
  onRepeatAudio,
}) => {
  if (!currentAudio) {
    currentAudio = initialAudio;
  }
  const initDuration = (timing / 31) * 100;
  const isInitMount = React.useRef(true);
  const [isShowPlaylist, setShowPlaylist] = React.useState<boolean>(false);
  const [leftPosition, setLeftPosition] = React.useState<number>(initDuration);

  React.useEffect(() => {
    audio && onPausePlayer();

    audio = new Howl({
      src: [currentAudio.preview],
      onend: handleAutoNext,
      volume: volume / 100,
      loop: true,
    });

    if (isInitMount.current) {
      isInitMount.current = false;
    } else {
      onPlayPlayer();
      document.title = `${currentAudio.artist} - ${currentAudio.title}`;
    }

    return () => {
      clearInterval(timer);
    };
  }, [currentAudio.preview]);

  React.useEffect(() => {
    if (isInitMount.current) {
      isInitMount.current = false;
    } else {
      !isPausing ? onPlayPlayer() : onPausePlayer();
    }
    return () => {
      clearInterval(timer);
    };
  }, [isPausing]);

  React.useEffect(() => {
    audio.volume(volume / 100);
  }, [volume]);

  useAnimationFrame(() => {
    if (isPlaying) {
      const newleftPosition = audio ? (audio.seek() / audio.duration()) * 100 : (timing / 31) * 100;
      setLeftPosition(newleftPosition);
    }
  });

  const syncCurrentTime = (): void => {
    timer = setInterval(() => {
      onUpdateDuration && onUpdateDuration(audio.seek());
    }, 1000);
  };

  const onPlayPlayer = (): void => {
    clearInterval(timer);
    syncCurrentTime();
    audio.seek(timing);
    audio.play();
  };

  const onPausePlayer = (): void => {
    audio.pause();
    clearInterval(timer);
  };

  const handleChangeVolume = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const offsetX: number = event.pageX - currentTargetRect.left;

    onChangeVolumePlayer && onChangeVolumePlayer(offsetX);
  };

  const handlePlay = (): void => {
    if (!currentAudio.preview) {
      return;
    }
    onContinueAudio && onContinueAudio();
    clearInterval(timer);
  };

  const handlePause = (): void => {
    onPauseAudio && onPauseAudio();
    onUpdateDuration!(audio.seek());
    clearInterval(timer);
  };

  const handleAutoNext = (): void => {
    if (!playlist || playlist.length === 0 || isRepeat) {
      return;
    }
    onGoToNextAudio && onGoToNextAudio();
    clearInterval(timer);
  };

  const handleControlNext = (): void => {
    if (!playlist || playlist.length === 0) {
      return;
    }
    onGoToNextAudio && onGoToNextAudio();
    clearInterval(timer);
  };

  const handlePrev = (): void => {
    if (!playlist || playlist.length === 0) {
      return;
    }
    onGoToPrevAudio && onGoToPrevAudio();
    clearInterval(timer);
  };

  const handleRepeatAudio = (): void => {
    onRepeatAudio && onRepeatAudio();
  };

  const handleShufflePlaylist = (): void => {
    if (!playlist || playlist.length === 0) {
      return;
    }
    onShufflePlaylist && onShufflePlaylist();
    clearInterval(timer);
  };

  const handleClickPlaylist = (): void => {
    if (!playlist || playlist.length === 0) {
      return;
    }
    setShowPlaylist(!isShowPlaylist);
  };

  const handleChangeSeek = (position: number): void => {
    const seek = audio ? (position / 100) * audio.duration() : (position * 31) / timing / 100;
    audio.seek(seek);
    onUpdateDuration!(audio.seek());
  };

  const currentDuration: string = formateInMinutes(timing);
  const duration: string = audio
    ? formateInMinutes(audio.duration().toFixed())
    : formateInMinutes(currentAudio.duration);

  return (
    <>
      <Player
        track={currentAudio}
        isPlaying={isPlaying}
        isRepeat={isRepeat || false}
        isShuffled={isShuffled || false}
        duration={duration}
        currentDuration={currentDuration}
        positionTrack={leftPosition}
        onPauseAudio={handlePause}
        onPlayAudio={handlePlay}
        onNextAudio={handleControlNext}
        onPrevAudio={handlePrev}
        onRepeatAudio={handleRepeatAudio}
        onShufflePlaylist={handleShufflePlaylist}
        volumeLevel={volume}
        onChangeVolume={handleChangeVolume}
        onClickPlaylist={handleClickPlaylist}
        onChangeSeek={handleChangeSeek}
      />

      <CSSTransition in={isShowPlaylist} timeout={500} classNames="playlist-transition">
        <>
          {isShowPlaylist && (
            <Modal>
              <PlaylistModal handleClose={handleClickPlaylist} />
            </Modal>
          )}
        </>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state: IStore) => ({
  currentAudio: playerSelectors.getCurrentAudio(state),
  isPlaying: playerSelectors.getPlayerAudioStatus(state),
  playlist: playerSelectors.getPlaylist(state),
  timing: playerSelectors.getDuration(state),
  isPausing: playerSelectors.getPausingAudioStatus(state),
  volume: playerSelectors.getVolume(state),
  isRepeat: playerSelectors.getRepeatStatus(state),
  isShuffled: playerSelectors.getShuffleStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onContinueAudio: () => dispatch(playerActions.continueAudio()),
  onPauseAudio: () => dispatch(playerActions.pauseAudio()),
  onUpdateDuration: (time: number) => dispatch(playerActions.updateDuration(time)),
  onChangeVolumePlayer: (value: number) => dispatch(playerActions.changeVolume(value)),
  onGoToPrevAudio: () => dispatch(playerActions.preparePrevAudio()),
  onGoToNextAudio: () => dispatch(playerActions.prepareNextAudio()),
  onShufflePlaylist: () => dispatch(playerActions.shufflePlaylist()),
  onRepeatAudio: () => dispatch(playerActions.repeatAudio()),
});

export default connect<{}, {}, IPlayerContainerProps>(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PlayerContainer));
