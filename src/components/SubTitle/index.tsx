import React from 'react';
import { SubtitleWrapper } from './styles';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <SubtitleWrapper>{text}</SubtitleWrapper>;
};

export default Subtitle;
