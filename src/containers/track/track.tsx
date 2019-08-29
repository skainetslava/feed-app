import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ITrack } from "src/models";
import { IStore } from "src/store";

import { Track } from "src/components/tracks/blocks/track";

import { continueAudio, pauseAudio, playAudio, updateDuration, updatePlaylist } from "src/actions/player";
import { getCurrentAudio, getDuration, getPlayerAudioStatus, getPlaylist } from "src/reducers/selectors";


interface ITrackContainerProps {
    tracks: ITrack[],
    track?: ITrack,
    timing?: number,
    isPlaying?: boolean,
    onPlayAudio?: (t: ITrack) => void,
    onContinueAudio?: () => void,
    onPauseAudio?: () => void,
    onUpdatePlaylist?: (t: ITrack[]) => void,
}


const TrackContainer: React.FC<ITrackContainerProps> = React.memo(({
    tracks,
    track,
    timing,
    isPlaying,
    onPlayAudio,
    onContinueAudio,
    onPauseAudio,
    onUpdatePlaylist,
}) => {

    const handlePlayAudio = (item: ITrack) => {
        onUpdatePlaylist && onUpdatePlaylist(tracks);
        onPlayAudio && onPlayAudio(item);
    }

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
});

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
    onUpdatePlaylist: (tracks: ITrack[]) => dispatch(updatePlaylist(tracks)),
});


export default connect<{}, {}, ITrackContainerProps>(mapStateToProps, mapDispatchToProps)(TrackContainer);