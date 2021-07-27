import React, { Component } from "react";
import Auxillary from "../hoc/Auxillary";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../UI/modal/Modal";
import OrderSummary from "../components/Burger/orderSummary/OrderSummary";
import axiosInstance from "../../src/axios-order";
import Spinner from "../UI/spinner/Spinner";
import WithErrorHandler from "../hoc/withErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../reducers/actions";

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    spinning: false,
    error: false,
  };

  componentDidMount() {
    // axiosInstance
    //   .get("/ingredients.json")
    //   .then((response) => {
    //     this.setState({
    //       ingredients: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
  }

  // addIngredientsHandler = (type) => {
  //   let burgerPrice = this.props.totalPrice;
  //   let currentState = {
  //     ...this.props.ingredients,
  //   };
  //   currentState[type] = currentState[type] + 1;
  //   const changedBurgerPrice = burgerPrice + INGREDIENTS_PRICE[type];
  //   this.setState({
  //     ingredients: currentState,
  //     totalPrice: changedBurgerPrice,
  //   });
  //   this.purchasable(currentState);
  // };

  // removeIngredientsHadler = (type) => {
  //   let burgerPrice = this.props.totalPrice;
  //   let currentState = {
  //     ...this.props.ingredients,
  //   };
  //   if (currentState[type] !== 0) {
  //     currentState[type] = currentState[type] - 1;
  //   }
  //   const changedBurgerPrice = burgerPrice - INGREDIENTS_PRICE[type];
  //   this.setState({
  //     ingredients: currentState,
  //     totalPrice: changedBurgerPrice,
  //   });
  //   this.purchasable(currentState);
  // };

  purchasable = (currentState) => {
    const sum = Object.keys(currentState)
      .map((ing) => {
        return currentState[ing] > 0;
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  };

  purchasableFlag = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchasing = () => {
    this.setState({ purchasing: false });
  };
  continuePurchasing = () => {
    this.setState({ spinning: true });

    this.props.history.push("/checkout");
  };

  render() {
    const disabledIngredients = { ...this.props.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    const finalPrice = this.props.totalPrice > 0 ? this.props.totalPrice : 0;

    let orderSummary = null;

    let burger = null;

    if (this.props.ingredients) {
      burger = (
        <Auxillary>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addedIngredients={this.props.addIngredient}
            removeIngredients={this.props.removeIngredient}
            disabled={disabledIngredients}
            price={finalPrice}
            disable={!this.props.purchasable}
            ingredients={this.props.ingredients}
            purchasable={this.purchasableFlag}
          />
        </Auxillary>
      );
      orderSummary = (
        <OrderSummary
          totalPrice={this.props.totalPrice}
          cancel={this.cancelPurchasing}
          continue={this.continuePurchasing}
          ingredients={this.props.ingredients}
        />
      );
    }
    if (this.state.spinning) {
      orderSummary = <Spinner />;
      burger = <Spinner />;
    }

    return (
      <Auxillary>
        {burger}
        <Modal
          purchasing={this.state.purchasing}
          cliked={this.cancelPurchasing}
        >
          {orderSummary}
        </Modal>
      </Auxillary>
    );
  }
}

const mapStateWithProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispathcWithProps = (dispatch) => {
  return {
    addIngredient: (ingredient_type) =>
      dispatch({ type: actionTypes.ADD_INGREDIENTS, value: ingredient_type }),
    removeIngredient: (ingredient_type) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        value: ingredient_type,
      }),
  };
};
export default connect(
  mapStateWithProps,
  mapDispathcWithProps
)(WithErrorHandler(BurgerBuilder, axiosInstance));
