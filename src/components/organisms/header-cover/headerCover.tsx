import * as React from "react";

import { Button } from "src/components/organisms/button";

import { formateWithDots } from "src/helpers/formateWithDots";
import "./headerCover.scss";

export interface IWithActions {
    onPlay: () => void
}

interface IHeaderCoverProps {
    title?: string,
    withActions: IWithActions | null,
    listeners?: number,
}

const HeaderCover: React.SFC<IHeaderCoverProps> = ({ title, listeners, withActions }) => {
    return <div className="cover_title">
        {listeners && <p className="cover_title_listeners">{formateWithDots(listeners)} MONTHLY LISTENERS</p>}
        <p className="cover_title_text">{title}</p>
        {
            withActions &&
            <>
                <div className="cover_title_play">
                    <Button title="Play" color="green" onClick={withActions.onPlay} />
                </div>
                <div className="cover_title_follow">
                    <Button title="Follow" onClick={() => { }} />
                </div>
            </>
        }
    </div>
};

export default HeaderCover;
