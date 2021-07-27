import React from "react";
import Classes from "./Order.module.css";
const Order = (props) => {
  let ingArray = [];
  for (let key in props.ingredients) {
    ingArray.push({
      name: key,
      price: props.ingredients[key],
    });
  }
  return (
    <div className={Classes.Order}>
      {ingArray.map((ing) => {
        return (
          <span
            key={ing.name}
            style={{
              textTransform: "capitalize",
              padding: "5px",
              display: "inline-block",
              margin: "0 8px",
              border: "1px solid #ccc",
            }}
          >
            {ing.name}
            $:({ing.price})
          </span>
        );
      })}
      <p>
        Total Price :
        <strong>USD: {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default Order;
