import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems";
import Classes from "./SideDrawer.module.css";
import BackDrop from "../../../UI/backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary";
import { checkPropTypes } from "prop-types";

const SideDrawer = (props) => {
  let attachedClasses = [Classes.SideDrawer, Classes.Close];
  if (props.show) {
    attachedClasses = [Classes.SideDrawer, Classes.Open];
  }
  return (
    <Auxillary>
      <BackDrop show={props.show} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={Classes.LogoHeight}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
