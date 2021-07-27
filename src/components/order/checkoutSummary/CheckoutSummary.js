import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../../UI/button/Button";
import Classes from "./CheckoutSummary.module.css";
import { Link } from "react-router-dom";

const CheckoutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
      <h1>Hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto", overflow: "hidden" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" click={props.CheckoutCancelled}>
        CANCEL
      </Button>
      {/* <Link to="/checkout"> */}
      <Button btnType="Success" click={props.CheckoutContinued}>
        CONTINUE
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default CheckoutSummary;
