import * as React from "react";
import { Button } from "src/components/organisms/button";

import "./headerCover.scss";

interface IHeaderCoverProps {
    title?: string,
    withActions: boolean
}


const HeaderCover: React.SFC<IHeaderCoverProps> = ({ title, withActions }) => {
    return <div className="cover_title">
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
