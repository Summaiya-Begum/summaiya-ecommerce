import * as types from "./makeup.actionType";
import axios from 'axios'
export const makeupRequest = () => {
  return { type: types.PRODUCT_FETCH_REQUEST };
};
export const makeupSuccess = (payload) => {
  return { type: types.PRODUCT_FETCH_SUCCESS, payload };
};
export const makeupFailure = (payload) => {
  return { type: types.PRODUCT_FETCH_FAILURE, payload };
};

export const getData = (payload) => (dispatch) => {

  dispatch(makeupRequest());
  axios
    .get(`https://mock-api-oc4h.onrender.com/products`,{params:payload})
    // .then((res)=>console.log(res.data))
    .then((res) => dispatch(makeupSuccess(res.data)))
    .catch((err) => dispatch(makeupFailure(err)));
};
