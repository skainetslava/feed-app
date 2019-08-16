import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { IArtist, ITrack } from "src/models";
import { IStore } from "src/store";

import { saveSearchingValue } from "src/actions/search/url";
import { SearchResults } from "src/components/pages/search/blocks/searchResults"
import { getSearchArtists, getSearchingValue, getSearchTracks } from "src/reducers/selectors";

interface IRouteProps {
    value: string;
}

interface ISearchResultsContainerProps extends RouteComponentProps<IRouteProps> {
    searchingValue: string,
    tracks?: ITrack[];
    artists?: IArtist[];
    isLoading?: boolean;
    onSaveSearchingValue?: (v: string) => void;
}

const SearchResultsContainer: React.FC<ISearchResultsContainerProps> = ({
    searchingValue,
    tracks,
    artists,
    match,
    onSaveSearchingValue,
}) => {
    React.useEffect(() => {
        const value = match.params.value || "";
        !searchingValue && onSaveSearchingValue && onSaveSearchingValue(value);
    }, [])

    return (
        <div>
            <SearchResults tracks={tracks} artists={artists} />
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSaveSearchingValue: (value: string) => dispatch(saveSearchingValue(value)),
});

const mapStateToProps = (state: IStore) => ({
    searchingValue: getSearchingValue(state),
    tracks: getSearchTracks(state),
    artists: getSearchArtists(state),
});

export default connect<{}, {}, ISearchResultsContainerProps>(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
