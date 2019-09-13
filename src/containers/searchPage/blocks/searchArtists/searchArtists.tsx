import * as React from "react";
import { connect } from "react-redux";
import { IArtist } from "src/models";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";


import { IRedirectProps, redirectBySearchingValue } from "src/actions/search/url";
import { SearchResults } from "src/components/pages/search/blocks/searchResults";
import { getSearchArtists, getSearchingValue } from "src/reducers/search/selectors";
import { ISearchingRouteProps } from "../searchResults/searchResults";

interface ISearchArtistsContainerProps extends RouteComponentProps<ISearchingRouteProps> {
    searchingValue: string,
    artists?: IArtist[];
    isLoading?: boolean;
    onRedirectSearchingValue?: (redirectData: IRedirectProps) => void;
}

const SearchArtistsContainer: React.FC<ISearchArtistsContainerProps> = ({
    artists,
    searchingValue,
    onRedirectSearchingValue,
    match,
}) => {
    React.useEffect(() => {
        const value = match.params.value || "";
        onRedirectSearchingValue && onRedirectSearchingValue({ tabName: "artists", value });
    }, [])

    return (
        <SearchResults artists={artists} />
    );
};

const mapStateToProps = (state: IStore) => ({
    searchingValue: getSearchingValue(state),
    artists: getSearchArtists(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRedirectSearchingValue: (data: IRedirectProps) => dispatch(redirectBySearchingValue(data)),
});


export default connect<{}, {}, ISearchArtistsContainerProps>
    (mapStateToProps, mapDispatchToProps)(React.memo(SearchArtistsContainer));
