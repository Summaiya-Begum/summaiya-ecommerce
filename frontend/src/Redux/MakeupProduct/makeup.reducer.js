
import * as types from "./makeup.actionType"

const initState = {
    data :[],
    isLoading:false,
    isError:false,
}


export const makeupReducer = (state=initState , action) =>{
    const {type,payload} = action
    // console.log(payload,'data');
    switch(type){
        case types.PRODUCT_FETCH_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case types.PRODUCT_FETCH_SUCCESS:
            return{
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }
        case types.PRODUCT_FETCH_FAILURE:
            return{
                ...state,
                isError:true,
                data:[]
            }
        default :
        return state
    }
}