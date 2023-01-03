import * as types from "./wishlist.actionType";

const init = {
  wishlistData: [],
  msg: "",
  isLoading: false,
  isError: false,
};

export const wishlistReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.WISHLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlistData: payload.data.wishData,
        msg: payload.data.msg,
      };
    case types.WISHLIST_ERROR:
      return {
        ...state,
        isError: true,
        wishlistData: [],
        msg: payload.msg,
      };
    default:
      return state;
  }
};
