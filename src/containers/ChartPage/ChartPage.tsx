import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { IPlayPage, playPage } from "src/actions/artist";
import { fetchChartRequest, IChartAction } from "src/actions/chart";
import { Cover } from "src/components/organisms/cover";
import { Tracks } from "src/components/tracks";
import { ITrack } from "src/models";
import { getChartLoadingStatus, getChartTracks } from "src/reducers/chart/selectors";

interface IChartContainerProps {
  dispatch?: any;
  tracks?: ITrack[];
  isLoading?: boolean;
  onFetchChart?: () => void;
  onPlayPage: (t: ITrack[]) => void;
}

const ChartPage: React.FC<IChartContainerProps> = ({
  tracks,
  onFetchChart,
  isLoading,
  onPlayPage,
}) => {
  React.useEffect(() => {
    if (!tracks || tracks.length === 0) {
      onFetchChart && onFetchChart();
    }
  }, [tracks]);

  const getTitleImage = (): string | undefined => {
    if (tracks && tracks.length > 0) {
      return tracks[0].coverBigTrack;
    }

    return undefined;
  };

  const handlePlayArtist = (): void => {
    tracks && onPlayPage(tracks);
  };

  return (
    <Cover
      image={getTitleImage()}
      withActions={{
        onPlay: handlePlayArtist,
      }}
      title="Most popular songs"
      hasTabs={true}
    >
      <Tracks className="chart-tracks" tracks={tracks} />
    </Cover>
  );
};

const mapStateToProps = (state: IStore) => ({
  tracks: getChartTracks(state),
  isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction | IPlayPage>) => ({
  onFetchChart: () => dispatch(fetchChartRequest()),
  onPlayPage: (tracks: ITrack[]) => dispatch(playPage(tracks)),
});

export default connect<{}, {}, IChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(ChartPage));
