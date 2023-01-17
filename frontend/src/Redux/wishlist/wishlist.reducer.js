import * as types from "./wishlist.actionType";

const init = {
  wishlistData: [],
  user:{},
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
        wishlistData: payload.wishData,
        user:payload.user,
        msg: payload.msg,
      };
    case types.WISHLIST_ERROR:
      return {
        ...state,
        isError: true,
        wishlistData: [],
        msg: payload.msg,
      };

    case types.PATCH_WISHLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.PATCH_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: payload.msg,
        wishlistData: payload.userWish,
      };
    case types.PATCH_WISHLIST_ERROR:
      return {
        wishlistData: [],
        isError: true,
        msg:payload.msg
      };

    case types.REMOVE_WISHLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.REMOVE_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: payload,
      };
    case types.REMOVE_WISHLIST_ERROR:
      return {
        isLoading:false,
        wishlistData: [],
        isError: true,
      };
    default:
      return state;
  }
};


