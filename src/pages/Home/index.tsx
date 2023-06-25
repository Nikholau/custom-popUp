import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopUp } from '../../store/popUpSlice';
import PopUp from '../../components/PopUp';
import { Button } from '../../components/Form/styles';
import popupConfigurations from '../../json/popups.json';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const openPopupSlotMachines = () => {
    const { title, subtitle } = popupConfigurations.slotMachine;
    dispatch(openPopUp({ title, subtitle }));
  };
  
  const openPopupVideo = () => {
    const { title, subtitle } = popupConfigurations.video;
    dispatch(openPopUp({ title, subtitle }));
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
