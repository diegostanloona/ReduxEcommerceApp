import React from "react";
import CartForm from "../components/CartForm";
import CartList from "../components/CartList";

const WishList = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <h1 className="text-center text-4xl py-8 text-white">Wish List</h1>

      <div className="container px-5 py-8 mx-auto flex flex-wrap">
        <div className="flex flex-wrap">
          <CartList />
        </div>
      </div>
    </section>
  );
};

export default WishList;
