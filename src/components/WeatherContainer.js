import React from 'react';
import styled from 'styled-components';
import { Sun, CloudDrizzle } from '@styled-icons/feather';
import { StyledIconBase } from '@styled-icons/styled-icon';

function WeatherContainer(props) {
  return (
    <Weather>
      Dag:{' '}
      <IconStyleWrapper>
        <Sun size='20' />
      </IconStyleWrapper>
      Natt:{' '}
      <IconStyleWrapper>
        <CloudDrizzle size='20' />
      </IconStyleWrapper>
    </Weather>
  );
}

const Weather = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 100%;
  width: 20vw;
  max-width: 20%;

  margin: 0 auto 0 1.5rem;
  padding: 0;

  background-color: transparent;
  color: #385170;

  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.7rem;
`;

const IconStyleWrapper = styled.span`
  ${StyledIconBase} {
    color: ${(props) => props.color || '#385170'};
    margin: 0 2rem 0 1rem;
  }
`;

export default WeatherContainer;
