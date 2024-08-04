import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
