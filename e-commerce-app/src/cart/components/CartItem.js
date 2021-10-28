import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartReducer";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ productId: props.cartItem.productId }));
  };

  return (
    <div className="pb-4 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <img
          alt={props.cartItem.title}
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={props.cartItem.image}
        />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">
            {props.cartItem.title}
          </h2>
          <p className="text-gray-600">
            {props.cartItem.price.toFixed(2)} X {props.cartItem.quantity}
            {" = " +
              (props.cartItem.price * props.cartItem.quantity).toFixed(2)}
          </p>
        </div>
        <button
          onClick={removeFromCartHandler}
          className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
