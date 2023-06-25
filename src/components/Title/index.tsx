import React from 'react';
import { TitleWrapper } from './styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
