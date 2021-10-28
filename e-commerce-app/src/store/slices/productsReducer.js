import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  error: null,
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
    fetchProductsFailed: (state, action) => {
      return {
        ...state,
        error: action.payload.error,
      };
    },
  },
});

export const { fetchProducts, fetchProductsSucceeded, fetchProductsFailed } =
  productsSlice.actions;
export default productsSlice.reducer;
