import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slice/CartSlice";
// import CartReducer from "./Slices/cartSlice"

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
