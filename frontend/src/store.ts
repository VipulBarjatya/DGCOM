import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
  preloadedState: initialState,
});

export default store;
