import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action, "action");
      state.count = state.count + 1;
    },
    decrementByAmount: (state, action) => {
      console.log(action, "decrementByAmount action");
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer
export const counterReducer = counterSlice.reducer;
