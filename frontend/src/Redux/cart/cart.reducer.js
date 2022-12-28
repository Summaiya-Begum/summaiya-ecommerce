import * as types from "./cart.actionType"
const initState={
    cartItems:[],
    quantity:[]
}
export const cartReducer=(state=initState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_CART_ITEMS:
            return {...state,cartItems:payload.getProduct,quantity:payload.quantity}
        default:
            return state
    }
}