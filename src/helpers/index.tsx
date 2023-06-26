interface PopupConfig {
  title: string;
  subtitle: string;
  urlVideo?: string;
  consent: boolean;
  formFields: {
    name: boolean;
    email: boolean;
    phoneNumber: boolean;
    gender: boolean;
  };
}

interface PopupConfigurations {
  [key: string]: PopupConfig;
}

const popupConfigurations: PopupConfigurations = {
  slotMachine: {
    title: 'PopUp Caça Níqueis',
    subtitle: 'Caça Níqueis',
    consent: true,
    formFields: {
      name: true,
      email: true,
      phoneNumber: true,
      gender: true,
    },
  },
  video: {
    title: 'Vídeo',
    subtitle: 'Como conseguir 10x mais conversões para seu Ecommerce',
    urlVideo: 'https://www.youtube.com/watch?v=LLcEvuWD0OI',
    consent: true,
    formFields: {
      name: true,
      email: true,
      phoneNumber: true,
      gender: true,
    },
  },
};

export const getPopupConfig = (popupName: string): PopupConfig => {
  return popupConfigurations[popupName];
};

