import React from "react";
import Classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];
const BuildControls = (props) => {
  return (
    <div className={Classes.BuildControls}>
      <p>
        Current Price:<strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          label={control.label}
          type={control.type}
          key={control.label}
          added={() => props.addedIngredients(control.type)}
          removed={() => props.removeIngredients(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        className={Classes.OrderButton}
        onClick={props.purchasable}
        disabled={props.disable}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
