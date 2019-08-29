import * as React from "react";
import { connect } from "react-redux";
import { ITrack } from "src/models";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";


import { IRedirectProps, redirectBySearchingValue } from "src/actions/search/url";
import { SearchResults } from "src/components/pages/search/blocks/searchResults";
import { getSearchingValue, getSearchTracks } from "src/reducers/selectors";
import { ISearchingRouteProps } from "../searchResults/searchResults";

interface ISearchArtistsContainerProps extends RouteComponentProps<ISearchingRouteProps> {
    searchingValue: string,
    tracks?: ITrack[];
    isLoading?: boolean;
    onRedirectSearchingValue?: (redirectData: IRedirectProps) => void;
}

const SearchTracksContainer: React.FC<ISearchArtistsContainerProps> = ({
    tracks,
    searchingValue,
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
    searchingValue: getSearchingValue(state),
    tracks: getSearchTracks(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRedirectSearchingValue: (data: IRedirectProps) => dispatch(redirectBySearchingValue(data)),
});


export default connect<{}, {}, ISearchArtistsContainerProps>
    (mapStateToProps, mapDispatchToProps)(SearchTracksContainer);
