import React from 'react';
import { SelectWrapper } from './styles';


interface SelectProps {
  id: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}



const Select: React.FC<SelectProps> = ({ id, name, required, children }) => {
  return (
    <SelectWrapper id={id} name={name} required={required}>
      {children}
    </SelectWrapper>
  );
};

export default Select;
