import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font border-b-2 border-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col flex-row items-center">
        <nav className="flex w-full flex-wrap items-center text-base m-auto">
          <NavLink to="/" className="mr-5 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/wishlist" className="mr-5 hover:text-white">
            Wishlist
          </NavLink>
          <NavLink to="/cart" className="mr-5 hover:text-white">
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
