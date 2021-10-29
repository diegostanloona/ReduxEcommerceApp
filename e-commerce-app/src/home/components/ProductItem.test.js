import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductItem from "./ProductItem";

describe("product item", () => {
  const props = {
    product: {
      id: 1,
      title: "test_title",
      image: "logo192.png",
      category: "test_category",
      price: "50",
    },
  };

  const wrap = (props) =>
    render(
      <Provider store={store}>
        <Router>
          <Route path="/">
            <ProductItem {...props} />
          </Route>
        </Router>
      </Provider>
    );

  it("product item renders", () => {
    const component = wrap(props);

    const title = component.queryByText(props.product.title);
    const category = component.queryByText(
      props.product.category.toUpperCase()
    );
    const price = component.queryByText(props.product.price, { exact: false });
    const image = component.getByAltText(props.product.title);

    expect(title).toBeTruthy();
    expect(category).toBeTruthy();
    expect(price).toBeTruthy();

    expect(image.src).toContain(props.product.image);
  });
});
