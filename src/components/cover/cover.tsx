import * as React from 'react';

import './cover.scss';

interface ICoverProps {
    image?: string
}

const Cover: React.FC<ICoverProps> = ({ image, children }) => {
    return (
        <div className="cover">
            <div className="cover_header" style={{backgroundImage: `url(${image})`}}>
                <p className="cover_header_text">Most popular songs</p>
            </div>
            {children}
        </div>
    )
};

export default Cover;
