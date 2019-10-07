import * as React from "react";

import "./mediaList.scss";

const MockMediaList: React.FC = () => {
  return (
    <div className="media-list">
      {Array(10)
        .fill(undefined)
        .map((item, index) => (
          <div className="mock-media-item" key={index}>
            <div className="mock-media-item_cover">
              <div className="mock-media-item_play" />
              <div className="mock-media-item_cover" />
            </div>
            <p className="mock-media-item_title"></p>
            <div className="mock-media-item_artist"></div>
          </div>
        ))}
    </div>
  );
};

export default MockMediaList;
