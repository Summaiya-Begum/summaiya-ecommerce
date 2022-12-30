import axios from "axios";
import * as types from "./cart.actionType";
const token = JSON.parse(localStorage.getItem("token"));
console.log(token);
export const getCartItems = () => (dispatch) => {
  return fetch(`http://localhost:8081/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.GET_CART_ITEMS, payload: res });
    });
};

export const addCartItems=(id)=>(dispatch)=>{
  return fetch(`http://localhost:8081/cart/add/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.ADD_CART_ITEMS, payload: res });
    });
};
export const changeCartItems=(id,qty)=>(dispatch)=>{
  return fetch(`http://localhost:8081/cart/edit/${id}`, {
    method: "PATCH",
    body:JSON.stringify({qty}),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.CHANGE_CART_ITEMS, payload: res });
    });
}


