import * as types from "./wishlist.actionType";
import axios from "axios";

// GET WISHLIST DATA FUNCTION
export const getData =
  (payload) =>
  (dispatch) => {
    dispatch({ type: types.WISHLIST_REQUEST });
    return axios
      .get(`https://summaiya-walkart-api.onrender.com/wishlist`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${payload}`,
        },
      })
      .then((res) =>{ 
        // console.log(res)
        dispatch({ type: types.WISHLIST_SUCCESS, payload: res.data })
      
      })
      .catch((err) => dispatch({ type: types.WISHLIST_ERROR, payload: err }));
  };

//   ADD WISHLIST DATA IN DATABASE

export const addData = (id,payload) => (dispatch) => {
  dispatch({ type: types.PATCH_WISHLIST_REQUEST });
  return fetch(
    `https://summaiya-walkart-api.onrender.com/wishlist/edit/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${payload}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      // console.log(res.msg);
      alert(res.msg);
      dispatch({ type: types.PATCH_WISHLIST_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.PATCH_WISHLIST_ERROR, payload: err })
    );
};

export const deleteData = (id,payload) => (dispatch) => {
  dispatch({ type: types.REMOVE_WISHLIST_REQUEST });
  return axios
    .delete(`https://summaiya-walkart-api.onrender.com/wishlist/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${payload}`,
      },
    })
    .then((res) => {
      dispatch({ type: types.REMOVE_WISHLIST_SUCCESS, payload: res });
    })
    .catch((err) =>
      dispatch({ type: types.REMOVE_WISHLIST_ERROR, payload: err })
    );
};
