import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.png";
import Classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={Classes.Logo}>
      <img src={BurgerLogo} alt="burgerLogo" />
    </div>
  );
};

export default Logo;
