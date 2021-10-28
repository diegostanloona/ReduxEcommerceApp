import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
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
    },
    removeFromWishList: (state, action) => {
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
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
