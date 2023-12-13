import { createSlice } from "@reduxjs/toolkit";

const greetingsSlice = createSlice({
  name: "greeting",
  initialState: {
    randomGreeting: "",
  },
  reducers: {
    setRandomGreeting: (state, action) => {
      state.randomGreeting = action.payload;
    },
  },
});

export const { setRandomGreeting } = greetingsSlice.actions;
export default greetingsSlice.reducer;
