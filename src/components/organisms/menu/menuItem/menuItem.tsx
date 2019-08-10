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
    <li className="menu-item">
      <div className="menu-item_icon">{icon}</div>
      <Link className="menu-item_link" to={link}>{title}</Link>
    </li>
  );
};

export default MenuItem;
