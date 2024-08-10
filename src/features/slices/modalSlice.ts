import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  isShow: boolean;
  content: React.ReactNode | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
  isShow: false,
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
    toggleShow(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const { openModal, closeModal, toggleShow } = modalSlice.actions;
export default modalSlice.reducer;
