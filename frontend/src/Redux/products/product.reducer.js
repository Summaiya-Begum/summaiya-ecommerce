import * as types from "./product.actionType";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  page: 1,
  limit: 20,
  sort: null,
  filter: null,
  msg: null,
};

export const productReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload.data,
        msg: payload.msg,
      };
    case types.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError: true,
        data: [],
      };
    case types.SORT_PRODUCT:
      return {
        ...state,
        sort: payload,
      };
    case types.FILTER_PRODUCT:
      return {
        ...state,
        filter: payload,
      };
    case types.SET_LIMIT_PRODUCT:
      return {
        ...state,
        limit: payload,
      };
    case types.SET_PAGE_PRODUCT:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};
