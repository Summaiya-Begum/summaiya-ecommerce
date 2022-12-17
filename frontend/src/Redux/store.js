import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./auth/auth.reducer";
import { productReducer } from "./products/product.reducer";

export const store = legacy_createStore(
  combineReducers({
    products: productReducer,
    user: userReducer,

  }),
  applyMiddleware(thunk)
);
