import { filter } from "@chakra-ui/react";
import * as types from "./product.actionType";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  page: 1,
  limit: 10,
  currentData: {},
  msg:null,
  filterData:[]
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
        filterData:payload.data,
        msg:payload.msg
      };
    case types.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isError:false,
        data:[] 
      };
    case types.FILTER_PRODUCT:
      return {
        ...state,
        filterData:payload
      }
    default:
      return state
      
  }
};
