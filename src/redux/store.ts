import { configureStore } from "@reduxjs/toolkit";
import inputsSlice from "./slices/inputSlice";

const store = configureStore({
  reducer: {
    inputs: inputsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
