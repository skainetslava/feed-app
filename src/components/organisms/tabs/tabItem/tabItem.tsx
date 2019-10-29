import * as React from "react";
import { Link } from "react-router-dom";

import "./tabItem.scss";

interface ITabItemProps {
  title: string;
  link: string;
}

const TabItem: React.FC<ITabItemProps> = ({ link, title }) => {
  return (
    <li className="tab-item">
      <Link to={link} aria-label="Go to another section" className="tab-item_link">
        {title}
      </Link>
    </li>
  );
};

export default TabItem;
