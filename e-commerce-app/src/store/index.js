import { join } from "@redux-saga/core/effects";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAPIcall } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const initialState = { products: [], cart: [], wishList: [] };

const postsReducer = (state = initialState, action) => {
  if (action.type === "fetch") {
    return {
      ...state,
    };
  }

  if (action.type === "fetchSucceeded") {
    return {
      ...state,
      products: action.response,
    };
  }

  if (action.type === "fetchFailed") {
    //Error handling here
    return {
      ...state,
    };
  }

  if (action.type === "addToCart") {
    const newCartItem = action.payload.cartItem;

    const isThisProductInCart = [
      ...state.cart.filter(
        (cartItem) => cartItem.productId === newCartItem.productId
      ),
    ][0];

    console.log(isThisProductInCart);

    if (isThisProductInCart) {
      newCartItem.quantity += isThisProductInCart.quantity;
    }

    const cartCopy = [
      ...state.cart.filter(
        (cartItem) => cartItem.productId !== newCartItem.productId
      ),
      newCartItem,
    ];

    console.log(cartCopy);
    return {
      ...state,
      cart: cartCopy,
    };
  }

  return {
    ...state,
  };
};

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAPIcall);

export default store;
