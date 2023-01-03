import * as types from "./wishlist.actionType";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));

// GET WISHLIST DATA FUNCTION
export const getData =
  (payload = null) =>
  (dispatch) => {
    dispatch({ type: types.WISHLIST_REQUEST });
    return (
      axios
        .get(`http://localhost:8081/wishlist`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        // .then((res)=>console.log(res.data.wishData))
        .then((res) => dispatch({ type: types.WISHLIST_SUCCESS, payload: res }))
        .catch((err) => dispatch({ type: types.WISHLIST_ERROR, payload: err }))
    );
  };

//   ADD WISHLIST DATA IN DATABASE

export const addData = (id) => (dispatch) => {
  dispatch({ type: types.PATCH_WISHLIST_REQUEST });
  return fetch(`http://localhost:8081/wishlist/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
    //   console.log(res);
      dispatch({ type: types.PATCH_WISHLIST_SUCCESS, payload: res.data })
      alert(`${res.data.msg}`)
    })
    .catch((err)=>dispatch({tyoe:types.PATCH_WISHLIST_ERROR,payload:err}))
};

export const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.REMOVE_WISHLIST_REQUEST });
  return axios
    .delete(`http://localhost:8081/wishlist/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res))
    .then((res) =>
      dispatch({ type: types.REMOVE_WISHLIST_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: types.REMOVE_WISHLIST_ERROR, payload: err })
    );
};
