import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalData: {
      header: '',
      text: '',
      actions: null,
    },
  },

  reducers: {
    modalIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    modalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const {
  modalIsOpen,
  modalData,
} = modalSlice.actions;

const setModalIsOpen = (isOpen) => (dispatch) => {
  dispatch(modalIsOpen(isOpen));
};

const setModalData = (data) => (dispatch) => {
  dispatch(modalData(data));
};

export {
  setModalIsOpen, setModalData,
};

export default modalSlice.reducer;
