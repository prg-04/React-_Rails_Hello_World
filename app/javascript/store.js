import { configureStore, createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    randomGreeting: '',
  },
  reducers: {
    setRandomGreeting: (state, action) => {
      state.randomGreeting = action.payload;
    },
  },
});

export const { setRandomGreeting } = greetingSlice.actions;

export const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  },
});
