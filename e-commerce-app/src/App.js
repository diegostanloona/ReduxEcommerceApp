import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/* import Posts from "./posts/pages/Posts";
import EditPost from "./posts/pages/EditPost"; */

import "./index.css";
import NavigationBar from "./shared/components/NavigationBar";
import Home from "./home/pages/Home";
import Product from "./home/pages/Product";
import Cart from "./cart/pages/Cart";
import WishList from "./cart/pages/WishList";

const App = () => {
  const dispatch = useDispatch();

  /* const posts = useSelector((state) => state.posts);

  if (posts?.length === 0 || posts === undefined) {
    dispatch({ type: "fetch" });
  } */

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
