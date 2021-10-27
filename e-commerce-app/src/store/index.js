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

    if (isThisProductInCart) {
      newCartItem.quantity += isThisProductInCart.quantity;
    }

    const cartCopy = [
      ...state.cart.filter(
        (cartItem) => cartItem.productId !== newCartItem.productId
      ),
      newCartItem,
    ];

    return {
      ...state,
      cart: cartCopy,
    };
  }

  if (action.type === "removeFromCart") {
    const productId = action.payload.productId;

    const cartCopy = [
      ...state.cart.filter((cartItem) => cartItem.productId !== productId),
    ];

    return {
      ...state,
      cart: cartCopy,
    };
  }

  if (action.type === "addToWishList") {
    const newWishListItem = action.payload.wishListItem;

    const wishListCopy = [
      ...state.wishList.filter(
        (wishListItem) => wishListItem.productId !== newWishListItem.productId
      ),
      newWishListItem,
    ];

    return {
      ...state,
      wishList: wishListCopy,
    };
  }

  if (action.type === "removeFromWishList") {
    const productId = action.payload.productId;

    const wishListCopy = [
      ...state.wishList.filter(
        (wishListItem) => wishListItem.productId !== productId
      ),
    ];

    return {
      ...state,
      wishList: wishListCopy,
    };
  }

  return {
    ...state,
  };
};

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAPIcall);

export default store;
