import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productListReducer,
} from "./redux/reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
  preloadedState: initialState,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
