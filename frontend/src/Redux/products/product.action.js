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
export const fetchProduct = () => (dispatch) => {
  dispatch(getRequest());
  return axios
    .get(`http://localhost:8081/products`)
    .then((res) => dispatch(getProduct(res.data)))
    .catch((err) => dispatch(getFailure(err)));
};

export const filterProduct =(payload)=>{
  return{
    type:types.FILTER_PRODUCT,payload
  }
}
