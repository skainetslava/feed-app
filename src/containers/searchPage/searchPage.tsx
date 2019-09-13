import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStore } from "src/store";

import {
    searchData,
} from "src/actions/search/tracks";
import { IRedirectProps, redirectBySearchingValue } from "src/actions/search/url";
import { Search } from "src/components/pages/search";
import { getSearchingValue } from "src/reducers/search/selectors";


interface IChartContainerProps {
    searchingValue?: string;
    isLoading?: boolean;
    onSearchData?: (v: string) => void;
    onRedirectSearchingValue?: (v: IRedirectProps) => void;
}

const SearchPage: React.FC<IChartContainerProps> = ({
    searchingValue = "",
    onSearchData,
    onRedirectSearchingValue,
    children,
}) => {
    React.useEffect(() => {
        onSearchData && onSearchData(searchingValue);
    }, [searchingValue])

    const onChangeInput = (value: string) => {
        onRedirectSearchingValue && onRedirectSearchingValue({ tabName: "results", value })
    }

    return (
        <div className="search">
            <Search valueUrl={searchingValue} onChangeInput={onChangeInput} />
            {children}
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    searchingValue: getSearchingValue(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearchData: (value: string) => dispatch(searchData(value)),
    onRedirectSearchingValue: (data: IRedirectProps) => dispatch(redirectBySearchingValue(data)),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(React.memo(SearchPage));
