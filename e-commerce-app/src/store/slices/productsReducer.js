import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      return {
        ...state,
      };
    },
    fetchProductsSucceeded: (state, action) => {
      return {
        ...state,
        products: action.payload.response,
      };
    },
    fetchProductsFailed: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { fetchProducts, fetchProductsSucceeded, fetchProductsFailed } =
  productsSlice.actions;
export default productsSlice.reducer;
