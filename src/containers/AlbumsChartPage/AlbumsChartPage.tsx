import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { fetchChartRequest, IChartAction } from "src/actions/chart";
import { MediaList } from "src/components/mediaList";
import { MockMediaList } from "src/components/mock/media";
import { Cover } from "src/components/organisms/cover";

import { IAlbum } from "src/models";

import { getChartAlbums, getChartLoadingStatus } from "src/reducers/chart/selectors";

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
  albums: getChartAlbums(state),
  isLoading: getChartLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
  onFetchChart: () => dispatch(fetchChartRequest()),
});

export default connect<{}, {}, IAlbumsChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(AlbumsChartPage));
