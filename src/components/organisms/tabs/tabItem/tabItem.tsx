import * as React from "react";
import { Link } from "react-router-dom";

import "./tabItem.scss";

interface ITabItemProps {
  title: string;
  link: string;
}

const TabItem: React.FC<ITabItemProps> = ({ link, title }) => {
  return (
    <Link to={link} className="tab-item_link"><li className="tab-item">{title}</li></Link>
  );
};

export default TabItem;
