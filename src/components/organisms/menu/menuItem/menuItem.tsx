import * as React from "react";
import { Link } from "react-router-dom";

import "./menuItem.scss";

interface IMenuItemProps {
  title: string;
  link: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ link, icon, title }) => {
  return (
    <li>
      <Link className="menu-item" to={link}>
        <div className="menu-item_icon">{icon}</div>
        <span className="menu-item_title">{title}</span>
      </Link >
    </li>
  );
};

export default MenuItem;
