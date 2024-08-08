// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/slices/modalSlice";
import userSlice from "./features/slices/userSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
