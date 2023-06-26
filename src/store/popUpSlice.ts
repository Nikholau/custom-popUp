import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopUpState {
  isOpen: boolean;
  title: string;
  subtitle: string;
  urlVideo?: string;
  type: 'video' | 'slotMachine' | '';
  consent: boolean;
  formFields: {
    name: boolean;
    email: boolean;
    phoneNumber: boolean;
    gender: boolean;
  };
}

const initialState: PopUpState = {
  isOpen: false,
  title: '',
  subtitle: '',
  urlVideo: '',
  type: '',
  consent: false,
  formFields: {
    name: false,
    email: false,
    phoneNumber: false,
    gender: false,
  },
};

const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    openPopUp: (state, action: PayloadAction<PopUpState>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
      state.urlVideo = action.payload.urlVideo || '';
      state.type = action.payload.type;
      state.consent = action.payload.consent;
      state.formFields = { ...action.payload.formFields };
    },
    closePopUp: (state) => {
      state.isOpen = false;
      state.title = '';
      state.subtitle = '';
      state.urlVideo = '';
      state.type = '';
      state.consent = false;
      state.formFields = {
        name: false,
        email: false,
        phoneNumber: false,
        gender: false,
      };
    },
  },
});

export const { openPopUp, closePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
