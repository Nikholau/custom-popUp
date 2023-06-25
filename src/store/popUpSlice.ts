import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopUpState {
  isOpen: boolean;
  title: string;
  subtitle: string;
}

const initialState: PopUpState = {
  isOpen: false,
  title: '',
  subtitle: '',
};

const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    openPopUp: (state, action: PayloadAction<{ title: string; subtitle: string; data?: any }>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
    },
    closePopUp: (state) => {
      state.isOpen = false;
      state.title = '';
      state.subtitle = '';
    },
  },
});

export const { openPopUp, closePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
