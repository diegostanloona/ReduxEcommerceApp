import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <h2 className="mb-2">
        Total: $
        {cartItems
          .reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
          .toFixed(2)}
      </h2>

      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.productId} cartItem={cartItem} />
      ))}
    </>
  );
};

export default CartList;
