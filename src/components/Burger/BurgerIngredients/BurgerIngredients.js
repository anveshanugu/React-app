import React from "react";
import Classes from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

const BurgerIngredients = (props) => {
  let ingredients = null;
  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={Classes.BreadBottom}></div>;
      break;

    case "bread-top":
      ingredients = (
        <div className={Classes.BreadTop}>
          <div className={Classes.Seed1}></div>
          <div className={Classes.Seed2}></div>
        </div>
      );
      break;

    case "meat":
      ingredients = <div className={Classes.Meat}></div>;
      break;

    case "cheese":
      ingredients = <div className={Classes.Cheese}></div>;
      break;

    case "salad":
      ingredients = <div className={Classes.Salad}></div>;
      break;

    case "bacon":
      ingredients = <div className={Classes.Bacon}></div>;
      break;
    default:
      ingredients = null;
  }
  return ingredients;
};
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
