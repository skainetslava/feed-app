import * as React from "react";
import { Button } from "src/components/organisms/button";
import { Tabs } from "src/components/organisms/tabs";
import "./cover.scss";

interface ICoverProps {
    image?: string
}

const Cover: React.FC<ICoverProps> = ({ image, children }) => {
    const style = image ? { backgroundImage: `url(${image})` } : undefined;
    return (
        <div className="cover">
            <div className="cover_header" style={style}>
                <Tabs />
                <div className="cover_title">
                    <p className="cover_title_text">Most popular songs</p>
                    <div className="cover_title_play"><Button title="Play" color="green" /></div>
                    <div className="cover_title_follow"><Button title="Follow" /></div>
                </div>
            </div>
            {children}
        </div>
    )
};

export default Cover;
