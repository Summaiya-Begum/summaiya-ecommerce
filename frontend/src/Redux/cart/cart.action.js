import axios from "axios";
import * as types from "./cart.actionType";
const token = JSON.parse(localStorage.getItem("token")) || '';
export const getCartItems = (payload) => (dispatch) => {
  return fetch(`https://summaiya-walkart-api.onrender.com/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.GET_CART_ITEMS, payload: res });
    });
};

export const addCartItems = (id, payload) => (dispatch) => {
  return fetch(`https://summaiya-walkart-api.onrender.com/cart/add/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.ADD_CART_ITEMS, payload: res });
      alert(res.msg);
    });
};
export const changeCartItems = (id, qty) => (dispatch) => {
  return fetch(`https://summaiya-walkart-api.onrender.com/cart/edit/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ qty }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.CHANGE_CART_ITEMS, payload: res });
    });
};

// Delete Cart Item

export const dltCartItem = (id, payload) => (dispatch) => {
  axios
    .delete(`https://summaiya-walkart-api.onrender.com/cart/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${payload}`,
      },
    })
    // .then((res)=>console.log(res.data))
    .then((res) =>
      dispatch(
        { type: types.REMOVE_CART_ITEMS, payload: res },
        alert(res.data.msg)
      )
    )
    .catch((err) => console.log(err));
};
