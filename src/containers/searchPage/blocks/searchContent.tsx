import * as React from "react";
import { connect } from "react-redux";
import { SearchContent } from "src/components/pages/search/blocks/searchContent"
import { IArtist, ITrack } from "src/models";
import { getSearchArtists, getSearchTracks } from "src/reducers/selectors";
import { IStore } from "src/store";

interface IChartContainerProps {
    tracks?: ITrack[];
    artists?: IArtist[];
    isLoading?: boolean;
}

const SearchContentContainer: React.FC<IChartContainerProps> = ({ tracks, artists }) => {
    return (
        <div>
            <SearchContent tracks={tracks} artists={artists} />
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getSearchTracks(state),
    artists: getSearchArtists(state),
});

export default connect<{}, {}, IChartContainerProps>(mapStateToProps, {})(SearchContentContainer);
