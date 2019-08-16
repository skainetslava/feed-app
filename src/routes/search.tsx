import * as React from "react";
import { Route, RouteProps} from "react-router-dom";

import { SearchPage } from "src/containers/SearchPage";
import SearchArtistContainer from "src/containers/SearchPage/blocks/searchArtists";
import SearchContentContainer from "src/containers/searchPage/blocks/searchResuts";

const SearchRoutes: React.FC<RouteProps> = () => (
    <SearchPage>
        <Route exact path="/search/results" component={SearchContentContainer} />
        <Route path="/search/results/:value" component={SearchContentContainer} />
        <Route exact path="/search/artists" component={SearchArtistContainer} />
        <Route path="/search/artists/:value" component={SearchArtistContainer} />
    </SearchPage>
);

export default SearchRoutes;
