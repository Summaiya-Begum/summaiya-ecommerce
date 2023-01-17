import * as types from "./product.actionType";
import axios from "axios";

const getRequest = () => {
  return {
    type: types.PRODUCT_FETCH_REQUEST,
  };
};

const getProduct = (payload) => {
  return { type: types.PRODUCT_FETCH_SUCCESS, payload };
};

const getFailure = () => {
  return { type: types.PRODUCT_FETCH_FAILURE };
};
export const fetchProduct =
  (payload) =>
  (dispatch) => {
    dispatch(getRequest());
    return (
      axios
        .get(
          `https://summaiya-walkart-api.onrender.com/products`,{ params:payload }
        )
        // .then((res)=>console.log(res.data))
        .then((res) => dispatch(getProduct(res.data)))
        .catch((err) => dispatch(getFailure(err)))
    );
  };

//  Sort By Price
export const sortProduct = (payload) => {
  return {
    type: types.SORT_PRODUCT,
    payload,
  };
};

// Filter By Category
export const filterProduct = (payload) => {
  return {
    type: types.FILTER_PRODUCT,
    payload,
  };
};

//  PAGINATION

// Limit
export const changeLimitProduct = (payload) => {
  return {
    type: types.SET_LIMIT_PRODUCT,
    payload,
  };
};

// Page
export const changePageProduct = (payload) => {
  return {
    type: types.SET_PAGE_PRODUCT,
    payload,
  };
};


// { filter, sort, page, limit }
// ?filter=${filter}&sort=${sort}&page=${page}&limit=${limit}



