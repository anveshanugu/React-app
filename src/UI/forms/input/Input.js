import React from "react";
import Classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  let classesArray = [Classes.inputElement];
  let validationError = null;

  if (props.touched && !props.valid) {
    classesArray.push(Classes.Valid);
    validationError = <p className={Classes.ValidationError}>invalid Input</p>;
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classesArray.join("")}
          type={props.elementConfig.type}
          placeholder={props.elementConfig.placeholder}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={Classes.inputElement} onChange={props.changed}>
          {props.elementConfig.options.map((option) => {
            return (
              <option key={props.key} type={option}>
                {option}
              </option>
            );
          })}
        </select>
      );
      break;
    case "textarea":
      inputElement = <textarea className={classesArray.join("")} {...props} />;
      break;
    default:
      inputElement = <input className={classesArray.join("")} {...props} />;
  }

  return (
    <div className={Classes.Input}>
      <label className={Classes.label}>
        {inputElement}
        {validationError}
      </label>
    </div>
  );
};

export default Input;
