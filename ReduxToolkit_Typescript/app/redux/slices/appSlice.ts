import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialStateType {
  count: number;
  countNumber: number;
}

const initialState: appSliceInitialStateType = {
  count: 0,
  countNumber: 5,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += Number(state.countNumber);
    },
    decreaseCount: (state) => {
      state.count = Number(state.countNumber);
    },
    countByNumber: (state, action) => {
      state.countNumber = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, countByNumber } = appSlice.actions;
export default appSlice.reducer;
