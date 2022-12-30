import * as types from "./cart.actionType";
const initState = {
  cartItems: [],
  quantity: [],
  msg: "",
};
export const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.getProduct,
        quantity: payload.quantity,
      };
    case types.ADD_CART_ITEMS:
      return { ...state, msg: payload };
    case types.CHANGE_CART_ITEMS:
      return { ...state, msg: payload };
    default:
      return state;
  }
};
