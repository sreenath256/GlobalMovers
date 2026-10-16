import { createSlice } from "@reduxjs/toolkit";

const buyNowSlice = createSlice({
  name: "buyNow",
  initialState: {
    loading: false,
    project: null,
    quantity: null,
    error: null,
  },
  reducers: {
    addToBuyNowStore: (state, { payload }) => {
      state.project = payload.project;
      state.quantity = payload.count;
    },
    emptyBuyNowStore: (state) => {
      state.project = null;
      state.quantity = null;
    },
  },
});

export const { addToBuyNowStore, emptyBuyNowStore } = buyNowSlice.actions;
export default buyNowSlice.reducer;
