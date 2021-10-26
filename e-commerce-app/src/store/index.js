import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
/* import { watchAPIcall } from "./saga";
 */
const sagaMiddleware = createSagaMiddleware();

const initialState = { products: [], card: [], wishList: [] };

const postsReducer = (state = initialState, action) => {};

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

/* sagaMiddleware.run(watchAPIcall);
 */
export default store;
