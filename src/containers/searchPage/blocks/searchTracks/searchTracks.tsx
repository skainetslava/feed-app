import * as React from "react";
import { connect } from "react-redux";
import { ITrack } from "src/models";
import { IStore } from "src/redux/store";

import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";


import { SearchResults } from "src/components/pages/search/blocks/searchResults";
import { searchActions, searchSelectors } from "src/redux/search";
import { ISearchingRouteProps } from "../searchResults/searchResults";

interface ISearchArtistsContainerProps extends RouteComponentProps<ISearchingRouteProps> {
    searchingValue: string,
    tracks?: ITrack[];
    isLoading?: boolean;
    onRedirectSearchingValue?: (redirectData: searchActions.IRedirectProps) => void;
}

const SearchTracksContainer: React.FC<ISearchArtistsContainerProps> = ({
    tracks,
    onRedirectSearchingValue,
    match,
}) => {
    React.useEffect(() => {
        const value = match.params.value || "";
        onRedirectSearchingValue && onRedirectSearchingValue({ tabName: "songs", value });
    }, [match.params.value])

    return (
        <SearchResults tracks={tracks} />
    );
};

const mapStateToProps = (state: IStore) => ({
    searchingValue: searchSelectors.getSearchingValue(state),
    tracks: searchSelectors.getSearchTracks(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRedirectSearchingValue: (data: searchActions.IRedirectProps) => dispatch(searchActions.redirectBySearchingValue(data)),
});


export default connect<{}, {}, ISearchArtistsContainerProps>
    (mapStateToProps, mapDispatchToProps)(React.memo(SearchTracksContainer));
