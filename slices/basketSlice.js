import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let indexofItem = state.items.findIndex(
        (item) => item.id == action.payload
      );
      state.items.splice(indexofItem, 1);
    },
  },
});

export const { addToCart, removeFromCart } = basketSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const getCartTotal = (state) =>
  state.cart.items.reduce((acc, item) => (acc += item.price), 0);
export default basketSlice.reducer;
