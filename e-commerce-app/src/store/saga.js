import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchProducts() {
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

    yield put({ type: "fetchSucceeded", response: response.products });
  } catch (error) {
    yield put({ type: "fetchFailed", error });
  }
}

export function* watchAPIcall() {
  yield takeLatest("fetch", fetchProducts);
}
