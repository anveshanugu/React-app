import React from "react";
import NavigationItem from "./navigationItem/NavigationItem/NavigationItem";
import Classes from "./NavigationItems.module.css";

const Navigationitems = () => {
  return (
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};
export default Navigationitems;
