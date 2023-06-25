import React from 'react';
import { CheckboxWrapper, CheckboxInput, CheckboxLabel } from './styles';

interface CheckboxProps {
  id: string;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" id={id} name={name} required />
      <CheckboxLabel htmlFor={id}>Concordo com a coleta de dados</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
