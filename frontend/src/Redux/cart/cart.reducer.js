import * as types from "./cart.actionType";
const initState = {
  cartItems: [],
  msg: "",
};
export const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_ITEMS:
      return { ...state, cartItems: payload.cart, };
    case types.ADD_CART_ITEMS:
      return { ...state, msg: {...payload.msg }};
    case types.CHANGE_CART_ITEMS:
      return { ...state, msg: payload };
    case types.REMOVE_CART_ITEMS:
      return { ...state, msg: payload };
    default:
      return state;
  }
};
