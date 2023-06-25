import styled from 'styled-components';

export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const PopUpContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  padding: 0;
`;
