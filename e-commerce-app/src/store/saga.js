import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductsFailed,
  fetchProductsSucceeded,
} from "./slices/productsReducer";
import regeneratorRuntime from "regenerator-runtime";

export const fetchProductsFromAPI = async () => {
  const response = await fetch("http://localhost:5000/products");
  const result = await response.json();
  console.log(result.products);
  return result.products;
};

export function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsFromAPI);

    yield put(fetchProductsSucceeded({ response: products }));
  } catch (error) {
    yield put(fetchProductsFailed({ error: error }));
  }
}

export function* watchAPIcall() {
  yield takeLatest(fetchProducts, fetchProductsSaga);
}
