import * as React from "react";
import { IconLogo } from "src/components/icons/logo";
import { Menu } from "src/components/menu";
import "./navbar.scss";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <IconLogo w={48} h={48} />
        <p className="logo_title">Spotifly</p>
      </div>
      <Menu />
    </div>
  );
};

export default NavBar;
