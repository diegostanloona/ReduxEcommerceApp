import React from "react";
import CartForm from "../components/CartForm";
import CartList from "../components/CartList";

const Cart = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <h1 className="text-center text-4xl py-8 text-white">Cart</h1>

      <div className="container px-5 py-8 mx-auto flex flex-wrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <CartList />
        </div>
        <div className="lg:w-2/6 md:w-1/2 h-full bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <CartForm />
        </div>
      </div>
    </section>
  );
};

export default Cart;
