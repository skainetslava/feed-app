import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Search } from "src/components/pages/search";
import { IStore } from "src/store";

import {
    searchData,
} from "src/actions/search";
import { IArtist, ITrack } from "src/models";
import { getSearchArtists, getSearchTracks } from "src/reducers/selectors";


interface IChartContainerProps {
    dispatch?: any;
    tracks: ITrack[];
    artists: IArtist[];
    isLoading?: boolean;
    onSearchData: (v: string) => void;
}

const SearchPage: React.FC<IChartContainerProps> = ({ onSearchData, tracks, artists }) => {
    const onChangeInput = (value: string) => {
        onSearchData(value);
    }

    return (
        <Search onChangeInput={onChangeInput} tracks={tracks} artists={artists} />
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getSearchTracks(state),
    artists: getSearchArtists(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearchData: (value: string) => dispatch(searchData(value)),
});


export default connect<{}, {}, IChartContainerProps>(mapStateToProps, mapDispatchToProps)(SearchPage);
