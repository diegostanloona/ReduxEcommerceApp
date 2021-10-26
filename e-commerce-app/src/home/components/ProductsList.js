import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  return (
    <>
      {props.products.length > 0 &&
        props.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductsList;
