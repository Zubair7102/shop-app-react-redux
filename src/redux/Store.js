import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slice/cartSlice";



export const store = configureStore({
    reducer:{
        cart: CartSlice
    }
})