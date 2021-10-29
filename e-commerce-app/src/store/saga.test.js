import { call } from "@redux-saga/core/effects";
import { fetchProductsSaga, fetchProductsFromAPI } from "./saga";

describe("products fetching", () => {
  it("fetches the products successfully", () => {
    const generator = fetchProductsSaga();
    expect(generator.next().value).toEqual(call(fetchProductsFromAPI));
  });
});
