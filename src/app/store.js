import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../component/MainPage/productSlice.js";

const rootReducer = {
  products: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
