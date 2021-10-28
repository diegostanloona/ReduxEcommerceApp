import productsReducer, {
  initialState,
  fetchProducts,
  fetchProductsSucceeded,
  fetchProductsFailed,
} from "./productsReducer";

describe("Products Slice", () => {
  it("should return the initial state on first run as well as fetching products", () => {
    const nextState = initialState;
    const result = productsReducer(initialState, fetchProducts());

    expect(result).toEqual(nextState);
  });

  it("should fetch the products on fetchSucceeded", () => {
    const nextState = {
      ...initialState,
      products: [{ title: "productTitle" }],
    };
    const result = productsReducer(
      initialState,
      fetchProductsSucceeded({ response: [{ title: "productTitle" }] })
    );

    expect(result).toEqual(nextState);
  });

  it("should return an error on fetchFailed", () => {
    const nextState = {
      ...initialState,
      error: "Test Error",
    };
    const result = productsReducer(
      initialState,
      fetchProductsFailed({ error: "Test Error" })
    );

    expect(result).toEqual(nextState);
  });
});
