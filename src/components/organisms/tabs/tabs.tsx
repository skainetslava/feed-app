import * as React from "react";
import { TabItem } from "./tabItem";

import "./tabs.scss";

const TABS_TITLES = {
  charts: {
    title: "charts",
    link: "/chart",
  },
  albums: {
    title: "albums",
    link: "/albums",
  },
  playlists: {
    title: "playlists",
    link: "/playlists",
  },
};

const Tabs: React.FC = () => {
  const tabsKeys = Object.values(TABS_TITLES);
  return (
    <ul className="tabs">
      {tabsKeys.map((item, index) => {
        return (
          <TabItem
            key={index}
            title={item.title}
            link={item.link}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
