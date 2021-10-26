import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to={`/product/${props.product.id}`}>
        <div className="block relative h-64 rounded overflow-hidden">
          <img
            alt={props.product.title}
            className="object-contain object-center w-full h-full block bg-white"
            src={props.product.image}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {props.product.category.toUpperCase()}
          </h3>
          <h2 className="text-white title-font text-lg font-medium">
            {props.product.title}
          </h2>
          <p className="mt-1">${props.product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
