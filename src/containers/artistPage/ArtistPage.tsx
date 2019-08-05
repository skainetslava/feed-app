import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "src/store";

import { RouteComponentProps } from "react-router-dom";
import {
    fetchArtistData,
} from "src/actions/artist";
import { Artist } from "src/components/pages/artist";
// import { Artist } from "src/components/artist";
import { IArtist } from "src/models";
import { getArtistData } from "src/reducers/selectors";

interface IRouteProps {
    id: string;
}

interface IArtistContainerProps extends RouteComponentProps<IRouteProps> {
    artist?: IArtist,
    isLoading?: boolean,
    onFetchArtistData?: (id: string) => void;
}

const ArtistPage: React.FC<IArtistContainerProps> = ({ artist, onFetchArtistData, isLoading, match }) => {
    React.useEffect(() => {
        onFetchArtistData && onFetchArtistData(match.params.id)
    }, [match.params.id]);

    const renderLoading = (): JSX.Element => {
        return <div>Loading...</div>
    }

    return (
        artist ? <Artist artist={artist} /> : renderLoading()
    );
};

const mapStateToProps = (state: IStore) => ({
    artist: getArtistData(state),
    // isLoading: getALoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onFetchArtistData: (id: string) => dispatch(fetchArtistData(id)),
});


export default connect<{}, {}, IArtistContainerProps>(mapStateToProps, mapDispatchToProps)(ArtistPage);
