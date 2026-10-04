import { configureStore } from "@reduxjs/toolkit";
import inputsSlice from "./slices/inputSlice";

const store = configureStore({
  reducer: {
    inputs: inputsSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "inputs",

    JSON.stringify(store.getState().inputs),
  );
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
