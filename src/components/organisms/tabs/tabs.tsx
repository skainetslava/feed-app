import cls from "classnames";
import * as React from "react";
import { TabItem } from "./tabItem";

import "./tabs.scss";

interface ITabsProps {
  tabs: object
  className?: string;
}

const Tabs: React.FC<ITabsProps> = ({ tabs, className }) => {
  const tabsKeys = Object.values(tabs);
  return (
    <ul className={cls(className, "tabs")}>
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
