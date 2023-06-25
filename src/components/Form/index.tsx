import React from 'react';
import { FormWrapper, FormGroup, Label, Input, Button } from './styles';
import { getPopupConfig } from '../../helpers/index';
import Select from '../Select';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const popupConfig = getPopupConfig('slotMachines');

  const { formFields } = popupConfig;

  const shouldDisplayName = formFields.name;
  const shouldDisplayEmail = formFields.email;
  const shouldDisplayPhoneNumber = formFields.phoneNumber;
  const shouldDisplayGender = formFields.gender;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, phoneNumber, gender } = event.currentTarget.elements as unknown as {
      name: HTMLInputElement;
      email: HTMLInputElement;
      phoneNumber: HTMLInputElement;
      gender: HTMLSelectElement;
      consent: HTMLInputElement;
    };

    onSubmit({
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      gender: gender.value,
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {shouldDisplayName && (
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
      )}

      {shouldDisplayEmail && (
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
      )}

      {shouldDisplayPhoneNumber && (
        <FormGroup>
          <Label htmlFor="phoneNumber">Número de Celular</Label>
          <Input type="text" id="phoneNumber" name="phoneNumber" required />
        </FormGroup>
      )}

      {shouldDisplayGender && (
        <FormGroup>
          <Label htmlFor="gender">Gênero</Label>
          <Select id="gender" name="gender" required>
            <option value="">Prefiro não informar</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </Select>
        </FormGroup>
      )}



      <Button type="submit">Enviar</Button>
    </FormWrapper>
  );
};

export default Form;
