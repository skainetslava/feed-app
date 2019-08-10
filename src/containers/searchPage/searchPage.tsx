import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Search } from "src/components/pages/search";
import { IStore } from "src/store";

import {
    searchData,
} from "src/actions/search";


interface IChartContainerProps {
    dispatch?: any;
    isLoading?: boolean,
    onSearchData: (v: string) => void
}

const SearchPage: React.FC<IChartContainerProps> = ({ onSearchData }) => {
    const onChangeInput = (value: string) => {
        console.log("object")
        onSearchData(value);
    }

    return (
        <Search onChangeInput={onChangeInput} />
    );
};

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearchData: (value: string) => dispatch(searchData(value)),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(SearchPage);
