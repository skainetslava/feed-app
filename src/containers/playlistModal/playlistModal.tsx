import * as React from "react";

import { connect } from "react-redux";
import { IStore } from "src/store";

import { PlaylistModal } from "src/components/organisms/playlistModal";
import { ITrack } from "src/models";
import { getPlaylist } from "src/reducers/selectors";


interface IPlaylistContainerProps {
    tracks?: ITrack[];
    handleClose: () => void;
}

const PlaylistModalContainer: React.FC<IPlaylistContainerProps> = ({ tracks, handleClose }) => {
    return (
        <PlaylistModal tracks={tracks} handleClose={handleClose} />
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getPlaylist(state),
});

export default connect<{}, {}, IPlaylistContainerProps>(mapStateToProps, {})
    (React.memo(PlaylistModalContainer));
