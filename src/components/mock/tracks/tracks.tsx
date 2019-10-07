import * as React from "react";

import "./tracks.scss";

interface IMockTracks {
  className: string;
}

const MockTracks: React.FC<IMockTracks> = ({ className }) => {
  return (
    <div className={className}>
      {Array(6)
        .fill(undefined)
        .map((item, index) => (
          <div className="mock-track" key={index}>
            <div className="mock-track_pause" />
            <div className="mock-track_cover" />
            <div className="mock-track_info">
              <p className="mock-track_title"></p>
              <div className="mock-track_artist"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MockTracks;
