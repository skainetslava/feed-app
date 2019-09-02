import cls from "classnames";
import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./tracks.scss";

import { TrackContainer } from "src/containers/track";
import { ITrack } from "src/models";

interface ITracksProps {
    limit?: number;
    tracks?: ITrack[],
    className?: string,
}

const Tracks: React.FC<ITracksProps> = React.memo(({ tracks, limit, className }) => {
    const renderTracks = () => {
        if (tracks && tracks.length > 0) {
            return (
                <TransitionGroup className={cls("tracks")}>
                    {tracks.slice(0, limit).map((track) => {
                        return (
                            <CSSTransition
                                key={track.id}
                                timeout={500}
                                classNames="track-transition"
                            >
                                <TrackContainer track={track} key={track.id} tracks={tracks} />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            );
        }
        return null;
    }

    return (
        <div className={cls(className)}>
            {renderTracks()}
        </div>
    )
});

export default Tracks;
