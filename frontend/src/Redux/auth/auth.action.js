import axios from "axios";
import * as types from "./auth.actionType";


// SIGNUP FUNCTION
export const getSignup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  axios
    .post(`http://localhost:8081/signup`, payload)
    .then((res) => {
      //   console.log(res.data.msg)
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.msg });
    })
    .catch((err) => dispatch({ type: types.SIGNUP_FAILURE, payload: err }));
};


// LOGIN FUNCTION
export const getLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  axios
    .post(`http://localhost:8081/login`, payload)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};




export const userLogout = (payload) => (dispatch) => {
  return dispatch({ type: types.LOG_OUT, payload: {msg:"LOGOUT SUCCESS" }});
};
