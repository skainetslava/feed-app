import * as React from "react";

import { Button } from "src/components/organisms/button";

import "./albumHeader.scss";

const MockAlbumHeader: React.FC = ({
}) => {
  return (
    <div className="mock-album-header">
      <div className="mock-album-header_cover">
        <div className="mock-album-header_img" />
      </div>
      <section className="mock-album-header_text">
        <div className="mock-album-header_title"></div>
        <div className="mock-album-header_artist"></div>
      </section>
      <Button className="mock-album-header_btn" title="Play" color="green" onClick={() => null} />
      <section className="mock-album-header_additional-info">
        <div className="mock-album-header_release-date"></div>
      </section>
    </div>
  );
};

export default MockAlbumHeader;
