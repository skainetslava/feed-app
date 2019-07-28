import * as React from "react";
import { IconHome } from "src/components/icons/home";
import { IconLibrary } from "src/components/icons/library";
import { IconSearch } from "src/components/icons/search";
import { MenuItem } from "src/components/menu/menuItem";
import "./menu.scss";

const MENU_TITLES = {
  home: {
    title: "Home",
    link: "/",
    icon: <IconHome w={24} h={24} />,
  },
  search: {
    title: "Search",
    link: "/",
    icon: <IconSearch w={24} h={24} />,
  },
  library: {
    title: "Your library",
    link: "/",
    icon: <IconLibrary w={24} h={24} />,
  },
};

const Menu: React.FC = () => {
  const menuKeys = Object.values(MENU_TITLES);
  return (
    <ul className="menu">
      {menuKeys.map((item) => {
        return (
          <MenuItem
            title={item.title}
            link={item.link}
            icon={item.icon}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
