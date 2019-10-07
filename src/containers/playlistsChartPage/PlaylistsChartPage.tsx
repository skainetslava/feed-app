import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { fetchChartRequest, IChartAction } from "src/actions/chart";

import { MediaList } from "src/components/mediaList";
import { MockMediaList } from "src/components/mock/media";
import { Cover } from "src/components/organisms/cover";

import { getChartLoadingStatus, getChartPlaylists } from "src/reducers/chart/selectors";

interface IPlaylistsChartContainerProps {
  dispatch?: any;
  playlists?: any;
  isLoading?: boolean;
  onFetchChart?: () => void;
}

const PlaylistsChartPage: React.FC<IPlaylistsChartContainerProps> = ({
  playlists,
  onFetchChart,
  isLoading,
}) => {
  React.useEffect(() => {
    if (!playlists || playlists.length === 0) {
      onFetchChart && onFetchChart();
    }
  }, [playlists]);

  return (
    <Cover withActions={null} hasTabs={true}>
      {!isLoading ? (
        <MediaList type="playlist" className="playlists-chart" list={playlists} />
      ) : (
        <MockMediaList />
      )}
    </Cover>
  );
};

const mapStateToProps = (state: IStore) => ({
  playlists: getChartPlaylists(state),
  isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
  onFetchChart: () => dispatch(fetchChartRequest()),
});

export default connect<{}, {}, IPlaylistsChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PlaylistsChartPage));
