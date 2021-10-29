import React from "react";
import CartItem from "./CartItem";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

describe("cart item", () => {
  const props = {
    cartItem: {
      productId: 1,
      title: "test_title",
      price: 50,
      quantity: 2,
      image: "logo192.png",
    },
  };

  const wrap = (props) =>
    render(
      <Provider store={store}>
        <CartItem {...props} />
      </Provider>
    );

  it("cart item renders", () => {
    const component = wrap(props);

    const title = component.queryByText(props.cartItem.title);
    const price = component.queryByText(props.cartItem.price, { exact: false });
    const quantity = component.queryByText(props.cartItem.quantity, {
      exact: false,
    });
    const totalPrice = component.queryByText(
      props.cartItem.price * props.cartItem.quantity,
      { exact: false }
    );
    const image = component.getByAltText(props.cartItem.title);

    expect(title).toBeTruthy();
    expect(price).toBeTruthy();
    expect(quantity).toBeTruthy();
    expect(totalPrice).toBeTruthy();
    expect(image.src).toContain(props.cartItem.image);
  });
});
