import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 12,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count++;
    },
    decreaseCount: (state) => {
      state.count--;
    },
  },
});

export const { increaseCount, decreaseCount } = appSlice.actions;
export default appSlice.reducer;
