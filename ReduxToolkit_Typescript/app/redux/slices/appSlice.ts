import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialStateType {
  count: number;
  number: number;
}

const initialState: appSliceInitialStateType = {
  count: 0,
  number: 5,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += Number(state.number);
    },
    decreaseCount: (state) => {
      state.count -= Number(state.number);
    },
    countByNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, countByNumber } = appSlice.actions;
export default appSlice.reducer;
