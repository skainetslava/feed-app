import * as React from "react";
import { connect } from "react-redux";
import { IArtist, ITrack } from "src/models";
import { getSearchArtists, getSearchTracks } from "src/reducers/selectors";
import { IStore } from "src/store";

interface ISearchArtistsContainerProps {
    tracks?: ITrack[];
    artists?: IArtist[];
    isLoading?: boolean;
}

const SearchArtistContainer: React.FC<ISearchArtistsContainerProps> = ({ tracks, artists }) => {
    return (
        <div>
            sfsdfdsf
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    tracks: getSearchTracks(state),
    artists: getSearchArtists(state),
});

export default connect<{}, {}, ISearchArtistsContainerProps>(mapStateToProps, {})(SearchArtistContainer);
