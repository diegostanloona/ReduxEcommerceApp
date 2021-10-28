import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
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
    },
    removeFromCart: (state, action) => {
      const productId = action.payload.productId;

      const cartCopy = [
        ...state.cart.filter((cartItem) => cartItem.productId !== productId),
      ];

      return {
        ...state,
        cart: cartCopy,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
