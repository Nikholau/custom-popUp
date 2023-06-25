interface PopupConfig {
  title: string;
  subtitle: string;
  formFields: {
    name: boolean;
    email: boolean;
    phoneNumber: boolean;
    gender: boolean;
    consent: boolean;
  };
}

const popupConfigurations: Record<string, PopupConfig> = {
  slotMachines: {
    title: 'PopUp Caça-níqueis',
    subtitle: 'Caça-níqueis',
    formFields: {
      name: true,
      email: true,
      phoneNumber: true,
      gender: false,
      consent: true,
    },
  },
  video: {
    title: 'Vídeo',
    subtitle: 'Vídeo',
    formFields: {
      name: true,
      email: true,
      phoneNumber: false,
      gender: true,
      consent: false,
    },
  },
};

export const getPopupConfig = (popupName: string): PopupConfig => {
  return popupConfigurations[popupName];
};
