import styled from 'styled-components';

export const SelectWrapper = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #06b6d4;
  }
`;