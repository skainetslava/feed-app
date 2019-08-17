import * as React from "react";
import { Route, RouteProps } from "react-router-dom";

import { SearchPage } from "src/containers/SearchPage";
import { SearchArtistsContainer } from "src/containers/searchPage/blocks/searchArtists";
import { SearchResultsContainer } from "src/containers/searchPage/blocks/searchResults";

const SearchRoutes: React.FC<RouteProps> = () => (
    <SearchPage>
        <Route exact path="/search/results" component={SearchResultsContainer} />
        <Route path="/search/results/:value" component={SearchResultsContainer} />
        <Route exact path="/search/artists" component={SearchArtistsContainer} />
        <Route path="/search/artists/:value" component={SearchArtistsContainer} />
    </SearchPage>
);

export default SearchRoutes;
