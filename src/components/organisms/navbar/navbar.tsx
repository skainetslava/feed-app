import * as React from "react";
import { IconLogo } from "src/components/icons/logo";
import { Menu } from "src/components/organisms/menu";
import "./navbar.scss";

const NavBar: React.FC = React.memo(() => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="logo">
          <IconLogo w={48} h={48} />
          <p className="logo_title">Spotifly</p>
        </div>
        <Menu />
      </div>
    </div>
  );
});

export default NavBar;
