import React, { useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  console.log(useParams().productId);

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantityHandler = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest my-2">
              BRAND NAME
            </h2>
            <h1 className="text-white text-3xl title-font font-medium my-4">
              The Catcher in the Rye
            </h1>

            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <div className="flex my-6">
              <span className="title-font font-medium text-2xl text-white w-1/3">
                ${(58.95 * quantity).toFixed(2)}
              </span>
              <div className="flex flex-wrap text-lg text-white w-1/3 select-none">
                <span
                  onClick={decreaseQuantityHandler}
                  className="mx-4 cursor-pointer hover:opacity-75"
                >
                  -
                </span>
                <span className="mx-4">{quantity}</span>
                <span
                  onClick={increaseQuantityHandler}
                  className="mx-4 cursor-pointer hover:opacity-75"
                >
                  +
                </span>
              </div>

              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:opacity-75">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
