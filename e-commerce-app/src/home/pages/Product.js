import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const Product = () => {
  const productId = useParams().productId;

  const dispatch = useDispatch();
  const product = useSelector(
    (state) =>
      state.products.filter((product) => product.id + "" === productId)[0] //Normally it would make a request to the backend asking for this single product.
  );

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

  const addToCartHandler = () => {
    dispatch({
      type: "addToCart",
      payload: {
        cartItem: {
          productId: product.id,
          title: product.title,
          quantity: quantity,
          price: product.price,
          image: product.image,
        },
      },
    });
  };

  return (
    <>
      {product && (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.title}
                className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded bg-white"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest my-2">
                  {product.category.toUpperCase()}
                </h2>
                <h1 className="text-white text-3xl title-font font-medium my-4">
                  {product.title}
                </h1>

                <p className="leading-relaxed">{product.description}</p>

                <div className="flex my-6 md:flex-row flex-col">
                  <span className="title-font font-medium text-2xl text-white lg:w-1/3 w-full pb-4">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                  <div className="flex flex-wrap text-lg text-white lg:w-1/3 w-full select-none pb-4">
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

                  <button
                    onClick={addToCartHandler}
                    className="flex text-white bg-red-500 border-0 py-2 mb-4 px-4 focus:outline-none hover:bg-red-600 rounded "
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 mx-auto hover:opacity-75">
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
      )}
    </>
  );
};

export default Product;
