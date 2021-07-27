import React from "react";
import Classes from "./Button.module.css";

const Button = (props) => {
  let cssStyle = [Classes.Button];
  if (props.disabled) {
    cssStyle.push(Classes.Disabled);
  } else {
    cssStyle.push(Classes[props.btnType]);
  }
  return (
    <button
      className={cssStyle.join(" ")}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
