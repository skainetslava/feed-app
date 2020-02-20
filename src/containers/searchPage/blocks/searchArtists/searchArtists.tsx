import * as React from "react";
import { connect } from "react-redux";
import { IArtist } from "src/models";
import { IStore } from "src/redux/store";

import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { SearchResults } from "src/components/pages/search/blocks/searchResults";
import { searchActions, searchSelectors } from "src/redux/search";
import { ISearchingRouteProps } from "../searchResults/searchResults";

interface ISearchArtistsContainerProps extends RouteComponentProps<ISearchingRouteProps> {
  searchingValue: string;
  artists?: IArtist[];
  isLoading?: boolean;
  onRedirectSearchingValue?: (redirectData: searchActions.IRedirectProps) => void;
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
  }, []);

  return <SearchResults artists={artists} />;
};

const mapStateToProps = (state: IStore) => ({
  searchingValue: searchSelectors.getSearchingValue(state),
  artists: searchSelectors.getSearchArtists(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRedirectSearchingValue:
    (data: searchActions.IRedirectProps) => dispatch(searchActions.redirectBySearchingValue(data)),
});

export default connect<{}, {}, ISearchArtistsContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(SearchArtistsContainer));
