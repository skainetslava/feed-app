import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStore } from "src/store";

import {
    saveSearchingValue,
} from "src/actions/search/url";
import {
    searchData,
} from "src/actions/search/tracks";
import { Search } from "src/components/pages/search";
import { getSearchingValue } from "src/reducers/selectors";


interface IChartContainerProps {
    searchingValue?: string;
    isLoading?: boolean;
    onSearchData?: (v: string) => void;
    onSaveSearchingValue?: (v: string) => void;
}

const SearchPage: React.FC<IChartContainerProps> = ({
    searchingValue = "",
    onSearchData,
    onSaveSearchingValue,
    children,
}) => {
    React.useEffect(() => {
        onSearchData && onSearchData(searchingValue);
    }, [searchingValue])

    const onChangeInput = (value: string) => {
        onSaveSearchingValue && onSaveSearchingValue(value)
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
    onSaveSearchingValue: (value: string) => dispatch(saveSearchingValue(value)),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(SearchPage);
