import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from "../../../UI/button/Button";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ing) => {
    return (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}:</span>
        {props.ingredients[ing]}
      </li>
    );
  });

  const query = [];
  for (let key in props.ingredients) {
    query.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(props.ingredients[key])
    );
  }
  query.push(
    encodeURIComponent("totalPrice") +
      "=" +
      encodeURIComponent(props.totalPrice)
  );

  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p> Your delicious burger with the following ingredients:</p>
      <ul> {ingredients}</ul>
      <div>
        <strong>Total:$ </strong> {props.totalPrice.toFixed(2)}
      </div>
      <p>Continue Order ?</p>
      <Button btnType={"Danger"} click={props.cancel}>
        CANCEL
      </Button>

      <Link to={{ pathname: "/checkout", search: "?" + query.join("&") }}>
        <Button btnType={"Success"} click={props.continue}>
          CONTINUE
        </Button>
      </Link>
    </Auxillary>
  );
};

export default OrderSummary;
