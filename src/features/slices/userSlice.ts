import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  loading: true,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
