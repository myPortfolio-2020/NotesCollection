import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialStateType {
  count: number;
}

const initialState: appSliceInitialStateType = {
  count: 0,
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
