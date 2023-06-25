import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: #000;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;
