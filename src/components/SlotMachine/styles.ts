import styled, { keyframes } from 'styled-components';

const slotMachineFrameWidth = '90%';
const slotMachineVideosHeight = '300px';
const buttonSize = '40px';


const leverActiveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

export const Lever = styled.button`
  width: 5%;
  height: 50%;
  background-color: #ffea00;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`;


export const SlotMachineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SlotMachineFrame = styled.div`
  width: ${slotMachineFrameWidth};
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SlotMachineVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${slotMachineVideosHeight};
`;

export const Video = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin: 0 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    width: ${buttonSize};
    height: ${buttonSize};
    border-radius: 50%;
    margin: 0 10px;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export const WinnerButton = styled.button`
  width: ${buttonSize};
  height: ${buttonSize};
  border-radius: 50%;
  background-color: #ff0000;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;
