import React from "react";
import Classes from "./DrawerToogle.module.css";

const DrawerToogle = (props) => {
  return (
    <div onClick={props.DrawerToogle} className={Classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default DrawerToogle;
