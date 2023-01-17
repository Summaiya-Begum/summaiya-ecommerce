import axios from "axios";
import * as types from "./auth.actionType";

// SIGNUP FUNCTION
export const getSignup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  axios
    .post(`https://summaiya-walkart-api.onrender.com/signup`, payload)
    .then((res) => {
      // console.log(res.data)
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.msg });
    })
    .catch((err) => dispatch({ type: types.SIGNUP_FAILURE, payload: err }));
};
export const getUser = (payload)  =>(dispatch)=> {
  return axios
    .get(`https://summaiya-walkart-api.onrender.com/user`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${payload}`,
      },
    })
    .then((res) => {
      // console.log(res.data, 'users');
      dispatch({ type: types.GET_USER, payload: res.data.user });
    });
};
// LOGIN FUNCTION
export const getLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  axios
    .post(`https://summaiya-walkart-api.onrender.com/login`, payload)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      getUser(res.data.token,dispatch)
    })
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};
// https://summaiya-walkart-api.onrender.com/user


export const userLogout = (payload=null) => (dispatch) => {
  return dispatch({ type: types.LOG_OUT, payload: { msg: "LOGOUT SUCCESS" } });
};
