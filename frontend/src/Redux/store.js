import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./products/product.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";

export const store = legacy_createStore(
  combineReducers({
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  }),
  applyMiddleware(thunk)
);
