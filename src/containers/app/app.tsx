import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "src/store";

import { RouteComponentProps, withRouter } from "react-router";

import { Navbar } from "src/components/organisms/navbar";
import { PlayerContainer } from "src/containers/player";

import { CurrentAudioProvider } from "src/context"
import { ITrack } from "src/models";
import { getCurrentAudio } from "src/reducers/selectors";

import "./app.scss";

interface IAppContainerProps extends RouteComponentProps {
    currentAudio?: ITrack
}

const AppContainer: React.FC<IAppContainerProps> = ({
    children,
    currentAudio,
}) => {
    return (
        <CurrentAudioProvider value={currentAudio ? currentAudio.id : {}}>
            <Navbar />

            <div className="app" id="app">
                {children}
            </div>
            <PlayerContainer />

        </CurrentAudioProvider>

    );
};

const mapStateToProps = (state: IStore) => ({
    currentAudio: getCurrentAudio(state),
});

export default withRouter(connect<{}, {}, IAppContainerProps>(mapStateToProps, {})(AppContainer));
