import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductsFailed,
  fetchProductsSucceeded,
} from "./slices/productsReducer";

function* fetchProductsFromAPI() {
  try {
    const response = yield call(
      () =>
        fetch("http://localhost:5000/products")
          .then((response) => response.json())
          .catch((error) => {
            console.log(error);
          }),
      {}
    );

    yield put(fetchProductsSucceeded({ response: response.products }));
  } catch (error) {
    yield put(fetchProductsFailed({ error: error }));
  }
}

export function* watchAPIcall() {
  yield takeLatest(fetchProducts, fetchProductsFromAPI);
}
