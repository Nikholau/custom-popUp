import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopUp } from '../../store/popUpSlice';
import PopUp from '../../components/PopUp';
import { Button } from '../../components/Form/styles';
import popupConfigurations from '../../json/popups.json';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const openPopupSlotMachines = () => {
    const { title, subtitle, consent, formFields } = popupConfigurations.slotMachine;
    dispatch(openPopUp({ title, subtitle, type: 'slotMachine', isOpen: true, consent, formFields }));
  };
  
  const openPopupVideo = () => {
    const { title, subtitle, urlVideo, consent, formFields } = popupConfigurations.video;
    dispatch(openPopUp({ title, subtitle, urlVideo, type: 'video', isOpen: true, consent, formFields }));
  };

  return (
    <div>
      <Button onClick={openPopupSlotMachines}>Caça Níqueis</Button>
      <Button onClick={openPopupVideo}>Vídeo</Button>

      <PopUp />
    </div>
  );
};

export default Home;
