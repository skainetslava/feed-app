import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import {
    IChartAction,
} from "src/actions/chart";
import { Cover } from "src/components/organisms/cover";

interface IAlbumsChartContainerProps {
    dispatch?: any;
}

const AlbumsChartPage: React.FC<IAlbumsChartContainerProps> = () => {
    return (
        <Cover>
           dfs
        </Cover >
    );
};

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<IChartAction>) => ({
});


export default connect<{}, {}, IAlbumsChartContainerProps>(mapStateToProps, mapDispatchToProps)(AlbumsChartPage);
