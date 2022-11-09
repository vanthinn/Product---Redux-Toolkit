import { createSlice } from "@reduxjs/toolkit";

const initialProduct = [
  {
    id: 1,
    title: "Điện thoại",
    price: 6000000,
  },
  {
    id: 2,
    title: "TV",
    price: 10000000,
  },
  {
    id: 3,
    title: "Tủ lạnh",
    price: 8000000,
  },
  {
    id: 4,
    title: "Máy giặt",
    price: 42000000,
  },
  {
    id: 5,
    title: "Máy tính",
    price: 36000000,
  },
];

const product = createSlice({
  name: "products",
  initialState: initialProduct,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const removeProductId = action.payload;
      return state.filter((product) => product.id !== removeProductId);
    },
    updateProduct: (state, action) => {
      const newProduct = action.payload;
      const ProductIndex = state.findIndex(
        (product) => product.id === newProduct.id
      );

      if (ProductIndex >= 0) {
        state[ProductIndex] = newProduct;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = product.actions;
export default product.reducer;
