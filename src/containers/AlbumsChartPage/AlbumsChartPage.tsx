import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/redux/store";

import { MediaList } from "src/components/mediaList";
import { MockMediaList } from "src/components/mock/media";
import { Cover } from "src/components/organisms/cover";
import { chartActions, chartSelectors } from "src/redux/chart";


import { IAlbum } from "src/models";


interface IAlbumsChartContainerProps {
  dispatch?: any;
  albums?: IAlbum[];
  isLoading?: boolean;
  onFetchChart?: () => void;
}

const AlbumsChartPage: React.FC<IAlbumsChartContainerProps> = ({
  albums,
  onFetchChart,
  isLoading,
}) => {
  React.useEffect(() => {
    if (!albums || albums.length === 0) {
      onFetchChart && onFetchChart();
    }
  }, [albums]);

  return (
    <Cover withActions={null} hasTabs={true}>
      {!isLoading ? (
        <MediaList className="albums-chart" type="album" list={albums} />
      ) : (
        <MockMediaList />
      )}
    </Cover>
  );
};

const mapStateToProps = (state: IStore) => ({
  albums: chartSelectors.getChartAlbums(state),
  isLoading: chartSelectors.getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<chartActions.IChartAction>) => ({
  onFetchChart: () => dispatch(chartActions.fetchChartRequest()),
});

export default connect<{}, {}, IAlbumsChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(AlbumsChartPage));
