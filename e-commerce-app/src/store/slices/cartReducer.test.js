import cartReducer, {
  initialState,
  addToCart,
  removeFromCart,
} from "./cartReducer";

describe("Cart Slice", () => {
  it("should return the cart with its new item", () => {
    const nextState = { cart: [{ productId: 1 }] };
    const result = cartReducer(
      initialState,
      addToCart({ cartItem: { productId: 1 } })
    );

    expect(result).toEqual(nextState);
  });

  it("should return the cart with the quantity of a given item updated", () => {
    const nextState = { cart: [{ productId: 1, quantity: 5 }] };
    const result = cartReducer(
      { cart: [{ productId: 1, quantity: 2 }] },
      addToCart({ cartItem: { productId: 1, quantity: 3 } })
    );

    expect(result).toEqual(nextState);
  });

  it("should return the cart without the item with the given productId", () => {
    const nextState = initialState;
    const result = cartReducer(
      { cart: [{ productId: 1 }] },
      removeFromCart({ productId: 1 })
    );

    expect(result).toEqual(nextState);
  });
});
