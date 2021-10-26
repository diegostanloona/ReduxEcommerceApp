import React from "react";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default Home;
