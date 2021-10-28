import wishListReducer, {
  initialState,
  addToWishList,
  removeFromWishList,
} from "./wishListReducer";

describe("WishList Slice", () => {
  it("should return the Wish List with its new item", () => {
    const nextState = { wishList: [{ productId: 1 }] };
    const result = wishListReducer(
      initialState,
      addToWishList({ wishListItem: { productId: 1 } })
    );

    expect(result).toEqual(nextState);
  });

  it("should return the Wish List without the item with the given productId", () => {
    const nextState = initialState;
    const result = wishListReducer(
      { wishList: [{ productId: 1 }] },
      removeFromWishList({ productId: 1 })
    );

    expect(result).toEqual(nextState);
  });
});
