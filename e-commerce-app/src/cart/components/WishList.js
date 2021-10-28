import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "./WishListItem";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishListState.wishList);

  return (
    <>
      {wishListItems.map((wishListItem) => (
        <WishListItem
          key={wishListItem.productId}
          wishListItem={wishListItem}
        />
      ))}
    </>
  );
};

export default WishList;
