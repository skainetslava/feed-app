import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ITrack } from "src/models";
import { IStore } from "src/store";

import { Track } from "src/components/tracks/blocks/track";

import { continueAudio, pauseAudio, playAudio, updateDuration } from "src/actions/player";
import { getCurrentAudio, getDuration, getPlayerAudioStatus, getPlaylist } from "src/reducers/selectors";


interface ITrackContainerProps {
    track?: ITrack,
    timing?: number,
    isPlaying?: boolean,
    onPlayAudio?: (t: ITrack) => void,
    onContinueAudio?: () => void,
    onPauseAudio?: () => void,
}


const TrackContainer: React.FC<ITrackContainerProps> = ({
    track,
    timing,
    isPlaying,
    onPlayAudio,
    onContinueAudio,
    onPauseAudio,
}) => {
    return (
        <Track
            track={track}
            isPlaying={isPlaying}
            timing={timing}
            onPauseAudio={onPauseAudio}
            onPlayAudio={onPlayAudio}
            onContinueAudio={onContinueAudio}
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
    onPlayAudio: (track: ITrack) => dispatch(playAudio(track)),
});


export default connect<{}, {}, ITrackContainerProps>(mapStateToProps, mapDispatchToProps)(TrackContainer);
