import * as types from "./wishlist.actionType";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));


// GET WISHLIST DATA FUNCTION
export const getData =
  (payload = null) =>
  (dispatch) => {
    dispatch({ type: types.WISHLIST_REQUEST });
    return axios
      .get(`http://localhost:8081/wishlist`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
    //   .then((res)=>console.log(res.data.wishData))
      .then((res) =>
        dispatch({ type: types.WISHLIST_SUCCESS, payload: res })
      )
      .catch((err) => dispatch({ type: types.WISHLIST_ERROR, payload: err }));
  };


//   ADD WISHLIST DATA IN DATABASE

