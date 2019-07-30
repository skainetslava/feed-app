import * as React from "react";
import "./menuItem.scss";

interface IMenuItemProps {
  title: string;
  link: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({ link, icon, title }) => {
    console.log(icon);
    return (
    <li className="menu-item">
      <div className="menu-item_icon">{icon}</div> 
      <a className="menu-item_link" href={link}>{title}</a>
    </li>
  );
};

export default MenuItem;
