import * as React from "react";

import "./albumHeader.scss";

const MockAlbumHeader: React.FC = ({}) => {
  return (
    <div className="mock-album-header">
      <div className="mock-album-header_img" />
      <section className="mock-album-header_text">
        <div className="mock-album-header_title"></div>
        <div className="mock-album-header_artist"></div>
      </section>
      <section className="mock-album-header_additional-info">
        <div className="mock-album-header_release-date"></div>
      </section>
    </div>
  );
};

export default MockAlbumHeader;
