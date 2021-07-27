import React from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems";
import DrawerToogle from "../drawerToogle/DrawerToogle";

const Toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
      <DrawerToogle DrawerToogle={props.DrawerToogle} />
      <div className={Classes.LogoHeight}>
        <Logo />
      </div>
      <nav className={Classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};
export default Toolbar;
