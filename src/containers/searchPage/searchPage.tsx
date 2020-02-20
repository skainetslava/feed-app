import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStore } from "src/redux/store";

import { Search } from "src/components/pages/search";
import { searchActions, searchSelectors } from "src/redux/search";

interface IChartContainerProps {
  searchingValue?: string;
  isLoading?: boolean;
  onSearchData?: (v: string) => void;
  onRedirectSearchingValue?: (v: searchActions.IRedirectProps) => void;
}

const SearchPage: React.FC<IChartContainerProps> = ({
  searchingValue = "",
  onSearchData,
  onRedirectSearchingValue,
  children,
}) => {
  React.useEffect(() => {
    onSearchData && onSearchData(searchingValue);
  }, [searchingValue]);

  const onChangeInput = (value: string) => {
    onRedirectSearchingValue && onRedirectSearchingValue({ tabName: "results", value });
  };

  return (
    <div className="search">
      <Search valueUrl={searchingValue} onChangeInput={onChangeInput} />
      {children}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  searchingValue: searchSelectors.getSearchingValue(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearchData: (value: string) => dispatch(searchActions.searchData(value)),
  onRedirectSearchingValue:
    (data: searchActions.IRedirectProps) => dispatch(searchActions.redirectBySearchingValue(data)),
});

export default connect<{}, {}, IChartContainerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(SearchPage));
