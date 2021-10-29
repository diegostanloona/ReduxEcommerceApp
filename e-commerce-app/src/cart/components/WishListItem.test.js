import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import WishListItem from "./WishListItem";
import { BrowserRouter as Router, Route } from "react-router-dom";

describe("wish list item", () => {
  const props = {
    wishListItem: {
      productId: 1,
      title: "test_title",
      image: "logo192.png",
    },
  };

  const wrap = (props) =>
    render(
      <Provider store={store}>
        <Router>
          <Route path="/">
            <WishListItem {...props} />
          </Route>
        </Router>
      </Provider>
    );

  it("wish list item renders", () => {
    const component = wrap(props);

    const title = component.queryByText(props.wishListItem.title);
    const image = component.getByAltText(props.wishListItem.title);

    expect(title).toBeTruthy();
    expect(image.src).toContain(props.wishListItem.image);
  });
});
