import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/redux/store";

import { Cover } from "src/components/organisms/cover";
import { Tracks } from "src/components/tracks";
import { ITrack } from "src/models";
import { artistActions } from "src/redux/artist";
import { chartActions, chartSelectors} from "src/redux/chart";

interface IChartContainerProps {
  dispatch?: any;
  tracks?: ITrack[];
  onFetchChart?: () => void;
  onPlayPage: (t: ITrack[]) => void;
}

const ChartPage: React.FC<IChartContainerProps> = ({
  tracks,
  onFetchChart,
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
  tracks: chartSelectors.getChartTracks(state),
  isLoading: chartSelectors.getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<chartActions.IChartAction | artistActions.IPlayPage>) => ({
  onFetchChart: () => dispatch(chartActions.fetchChartRequest()),
  onPlayPage: (tracks: ITrack[]) => dispatch(artistActions.playPage(tracks)),
});

export default connect<{}, {}, IChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(ChartPage));
