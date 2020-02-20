import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ITrack } from "src/models";
import { IStore } from "src/redux/store";

import { Track } from "src/components/tracks/blocks/track";

import {
  playerActions,
  playerSelectors,
} from "src/redux/player";

interface ITrackContainerProps {
  tracks: ITrack[];
  track?: ITrack;
  timing?: number;
  isPlaying?: boolean;
  isPlaylist?: boolean;
  onPlayAudio?: (t: ITrack) => void;
  onContinueAudio?: () => void;
  onPauseAudio?: () => void;
  onUpdatePlaylist?: (t: ITrack[]) => void;
}

const TrackContainer: React.FC<ITrackContainerProps> = ({
  tracks,
  track,
  timing,
  isPlaying,
  isPlaylist,
  onPlayAudio,
  onContinueAudio,
  onPauseAudio,
  onUpdatePlaylist,
}) => {
  const handlePlayAudio = (item: ITrack) => {
    const tracksForPlaylist = isPlaylist ? [] : tracks;
    onUpdatePlaylist && onUpdatePlaylist(tracksForPlaylist);
    onPlayAudio && onPlayAudio(item);
  };

  return (
    <Track
      track={track}
      isPlaying={isPlaying}
      timing={timing}
      onPauseAudio={onPauseAudio}
      onPlayAudio={handlePlayAudio}
      onContinueAudio={onContinueAudio}
    />
  );
};

const mapStateToProps = (state: IStore) => ({
  currentAudio: playerSelectors.getCurrentAudio(state),
  isPlaying: playerSelectors.getPlayerAudioStatus(state),
  playlist: playerSelectors.getPlaylist(state),
  timing: playerSelectors.getDuration(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onContinueAudio: () => dispatch(playerActions.continueAudio()),
  onPauseAudio: () => dispatch(playerActions.pauseAudio()),
  onUpdateDuration: (time: number) => dispatch(playerActions.updateDuration(time)),
  onPlayAudio: (track: ITrack) => dispatch(playerActions.playAudio(track)),
  onUpdatePlaylist: (tracks: ITrack[]) => dispatch(playerActions.updatePlaylist(tracks)),
});

export default connect<{}, {}, ITrackContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(TrackContainer));
