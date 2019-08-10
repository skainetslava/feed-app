import * as React from "react";

import { Button } from "src/components/organisms/button";

import { formateWithDots } from "src/helpers/formateWithDots";
import "./headerCover.scss";

interface IHeaderCoverProps {
    title?: string,
    withActions: boolean,
    listeners?: number,
}

const HeaderCover: React.SFC<IHeaderCoverProps> = ({ title, listeners, withActions }) => {
    return <div className="cover_title">
        {listeners && <p className="cover_title_listeners">{formateWithDots(listeners)} MONTHLY LISTENERS</p>}
        <p className="cover_title_text">{title}</p>
        {
            withActions &&
            <>
                <div className="cover_title_play"><Button title="Play" color="green" /></div>
                <div className="cover_title_follow"><Button title="Follow" /></div>
            </>
        }
    </div>
};

export default HeaderCover;
