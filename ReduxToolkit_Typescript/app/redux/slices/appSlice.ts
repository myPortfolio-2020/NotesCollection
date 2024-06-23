import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialStateType {
  count: number;
  countNumber: number;
}

const initialState: appSliceInitialStateType = {
  count: 0,
  countNumber: 1,
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
    countByNumber: (state, action) => {
      state.countNumber = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, countByNumber } = appSlice.actions;
export default appSlice.reducer;
