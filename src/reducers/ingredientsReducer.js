import * as actionTypes from "../reducers/actions";
let initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 4,
  purchasable: false,
};

const INGREDIENTS_PRICE = {
  meat: 2.6743,
  salad: 3.4564,
  bacon: 17.9786,
  cheese: 4.453235,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.value]: state.ingredients[action.value] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.value],
        purchasable: state.totalPrice.toFixed(2) >= 4,
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.value]: state.ingredients[action.value] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.value],
        purchasable: state.totalPrice.toFixed(2) <= 4,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
