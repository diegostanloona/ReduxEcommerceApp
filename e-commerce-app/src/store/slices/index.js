import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  wishListState: wishListReducer,
});

export default rootReducer;
