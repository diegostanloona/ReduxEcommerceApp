import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../../store/slices/wishListReducer";

const WishListItem = (props) => {
  const dispatch = useDispatch();

  const removeFromWishListHandler = () => {
    dispatch(removeFromWishList({ productId: props.wishListItem.productId }));
  };

  return (
    <div className="pb-4 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <Link to={`/product/${props.wishListItem.productId}`}>
          <img
            alt={props.wishListItem.title}
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={props.wishListItem.image}
          />
        </Link>
        <div className="flex-grow">
          <Link to={`/product/${props.wishListItem.productId}`}>
            <h2 className="text-white title-font font-medium">
              {props.wishListItem.title}
            </h2>
          </Link>
        </div>

        <button
          onClick={removeFromWishListHandler}
          className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
