import React from "react";

const CartItem = (props) => {
  return (
    <div className={`${props.isCart ? "pb-4" : "p-4 md:w-1/2"} w-full`}>
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src="https://dummyimage.com/80x80"
        />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">
            Holden Caulfield
          </h2>
          <p className="text-gray-600">UI Designer</p>
        </div>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
