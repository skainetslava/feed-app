import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { IArtist, ITrack } from "src/models";
import { IStore } from "src/store";

import { IRedirectProps, redirectBySearchingValue } from "src/actions/search/url";
import { SearchResults } from "src/components/pages/search/blocks/searchResults"
import { getSearchArtists, getSearchingValue, getSearchTracks } from "src/reducers/selectors";

export interface ISearchingRouteProps {
    value: string;
}

interface ISearchResultsContainerProps extends RouteComponentProps<ISearchingRouteProps> {
    searchingValue: string,
    tracks?: ITrack[];
    artists?: IArtist[];
    isLoading?: boolean;
    onRedirectSearchingValue?: (redirectData: IRedirectProps) => void;
}

const SearchResultsContainer: React.FC<ISearchResultsContainerProps> = ({
    searchingValue,
    tracks,
    artists,
    match,
    onRedirectSearchingValue,
}) => {
    React.useEffect(() => {
        const value = match.params.value || "";
        !searchingValue && onRedirectSearchingValue && onRedirectSearchingValue({ tabName: "results", value });
    }, [])

    return (
        <SearchResults tracks={tracks} artists={artists} tracksLimit={5} artistsLimit={10} />
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRedirectSearchingValue: (data: IRedirectProps) => dispatch(redirectBySearchingValue(data)),
});

const mapStateToProps = (state: IStore) => ({
    searchingValue: getSearchingValue(state),
    tracks: getSearchTracks(state),
    artists: getSearchArtists(state),
});

export default connect<{}, {}, ISearchResultsContainerProps>
    (mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
