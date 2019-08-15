import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import {
    searchData,
} from "src/actions/search/tracks";
import { Search } from "src/components/pages/search";
import history from "src/history";
import SearchArtists from "./blocks/searchArtists";
import SearchContent from "./blocks/searchContent";

interface IRouteProps {
    value: string;
}

interface IChartContainerProps extends RouteComponentProps<IRouteProps> {
    dispatch?: any;
    isLoading?: boolean;
    onSearchData: (v: string) => void;
}

const SearchPage: React.FC<IChartContainerProps> = ({ dispatch, match, onSearchData, children }) => {
    React.useEffect(() => {
        onSearchData(match.params.value);
    }, [match.params.value])

    const onChangeInput = (value: string) => {
        history.push(`/search/results/${value}`);
    }

    return (
        <div className="search">
            <Search valueUrl={match.params.value} onChangeInput={onChangeInput} />
            <Route path="/" component={SearchContent} />
            <Route path="/artists" component={SearchArtists} />
            <Route path="/artists/:value" component={SearchArtists} />
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearchData: (value: string) => dispatch(searchData(value)),
});


export default withRouter(connect<{}, {}, IChartContainerProps>(null, mapDispatchToProps)(SearchPage));
