import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
  return (
    <>
      {props.isCart && <h2 className="mb-2">Total: 30$</h2>}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9].map((cartItem) => (
        <CartItem isCart={props.isCart} />
      ))}
    </>
  );
};

export default CartList;
