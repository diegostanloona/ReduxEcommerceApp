import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = (props) => {
  const cartItems = useSelector((state) =>
    props.isCart ? state.cart : state.wishList
  );

  return (
    <>
      {props.isCart && (
        <h2 className="mb-2">
          Total: ${cartItems.reduce((prev, cur) => prev + cur.price, 0)}
        </h2>
      )}
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.productId}
          isCart={props.isCart}
          cartItem={cartItem}
        />
      ))}
    </>
  );
};

export default CartList;
