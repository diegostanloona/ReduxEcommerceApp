import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";
import NavigationBar from "./shared/components/NavigationBar";
import Home from "./home/pages/Home";
import Product from "./home/pages/Product";
import Cart from "./cart/pages/Cart";
import WishList from "./cart/pages/WishListPage";

const App = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  if (products?.length === 0 || products === undefined) {
    dispatch({ type: "fetch" });
  }

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/product/:productId">
        <Product />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/wishlist" exact>
        <WishList />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <NavigationBar />
      {routes}
    </Router>
  );
};

export default App;
