import { createSlice } from "@reduxjs/toolkit";

// export const initialState = {
//     cart: []
//   };

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // here add and remove are two reducer functions and all reducer functions take two values state and action

    // state: Represents the current state before the update.
    // action: An object containing information about what happened. This includes a payload property with the new item to add.
    add: (state, action) => {
      state.push(action.payload);
      // state.push(action.payload);: This line adds (pushes) the new item (found in action.payload) to the end of the current state list.
      // Example: If the current state is ['item1', 'item2'] and the action's payload is 'item3', after calling this reducer, the state will be ['item1', 'item2', 'item3'].
      // The payload property holds the data required by the reducer to update the state.
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
      // return state.filter((item) => item.id !== action.payload);: This line returns a new list that contains all items except the one with the id matching action.payload.
    },
  },
});

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
