import * as React from "react";
import { Button } from "src/components/organisms/button";
import "./cover.scss";

interface ICoverProps {
    image?: string
}

const Cover: React.FC<ICoverProps> = ({ image, children }) => {
    return (
        <div className="cover">
            <div className="cover_header" style={{ backgroundImage: `url(${image})` }}>
                <div className="cover_title">
                    <p className="cover_title_text">Most popular songs</p>
                    <div className="cover_title_play"><Button title="Play" /></div>
                    <div className="cover_title_follow"><Button title="Follow" /></div>
                </div>
            </div>
            {children}
        </div>
    )
};

export default Cover;
