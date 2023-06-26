import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { RootState } from '../../store';
import { closePopUp } from '../../store/popUpSlice';
import Title from '../Title';
import Subtitle from '../SubTitle';
import Form from '../Form';
import VideoPopUp from '../Video/index';
import SlotMachine from '../SlotMachine/Index';
import {CloseButton, PopUpContainer, PopUpContent } from './styles';

const PopUp: React.FC = () => {
  const isPopUpOpen = useSelector((state: RootState) => state.popUp.isOpen);
  const popUpData = useSelector((state: RootState) => state.popUp);
  const dispatch = useDispatch();

  const handleClosePopUp = () => {
    dispatch(closePopUp());
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closePopUp());
    }
  };

  if (!isPopUpOpen) {
    return null;
  }

  const renderPopUpContent = () => {
    if (popUpData.type === 'video') {
      return <VideoPopUp urlVideo={popUpData.urlVideo} />;
    } else if (popUpData.type === 'slotMachine') {
      return <SlotMachine />;
    }
    return null;
  };

  return (
    <PopUpContainer onClick={handleOutsideClick}>
      <PopUpContent>
        <CloseButton onClick={handleClosePopUp}>
          <FaTimes />
        </CloseButton>
        <Title text={popUpData.title} />
        <Subtitle text={popUpData.subtitle} />
        {renderPopUpContent()}
        <Form onSubmit={() => console.log('foi')} />
      </PopUpContent>
    </PopUpContainer>
  );
};

export default PopUp;
