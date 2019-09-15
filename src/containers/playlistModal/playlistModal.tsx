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
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handle(event: MouseEvent) {
      const exceptEl = document.querySelector(".navbar") as Node;
      if (exceptEl.contains(event.target as Node)) {
        handleClose();
      }
    }

    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, [ref]);

  return <PlaylistModal tracks={tracks} onClose={handleClose} ref={ref} />;
};

const mapStateToProps = (state: IStore) => ({
  tracks: getPlaylist(state),
});

export default connect<{}, {}, IPlaylistContainerProps>(
  mapStateToProps,
  {},
)(React.memo(PlaylistModalContainer));
