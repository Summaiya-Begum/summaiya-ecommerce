import axios from "axios"
import * as types from "./cart.actionType"
const token=JSON.parse(localStorage.getItem("token"));
console.log(token)
export const getCartItems=()=>(dispatch)=>{
    return fetch(`http://localhost:8081/cart`,{
        method:"GET",
        headers:{"Content-Type":"application/json","authorization":`Bearer ${token}`}
    })
    .then(res=>res.json())
    .then(res=>{
        // console.log(res);
        dispatch({type:types.GET_CART_ITEMS,payload:res})
    })
}


//  Product PATCH Cart Request
// export const postProduct =(payload)=>(dispatch)=>{
//     return fetch(`http://localhost:8081/cart/edit/${payload}`,{
//         method:"PATCH",
//         headers:{"Content-Type":"application/json","authorization":`Bearer ${token}`}
//     })
//     .then(res=>res.json())
//     .then(res=>{
//         console.log(res);
//        dispatch(getCartItems())
//     })
//   }

