import React from 'react';
import styled, { css } from 'styled-components';

import HorseList from 'Components/Horses/HorseList';
import { commonDimensions } from 'Styles/Containers/commonDimensions';

function Horses() {
  return (
    <>
      <TopContainer>
        <Title>Hästarna</Title>
        <TopText>
          Detta är hästar som ägs av HG och som är tillgängliga som sköthästar eller för uthyrning.
          Ibland säljs någon men då auktioneras de ut. Om men är intresserad av att hyra eller bli
          skötare på en häst i denna lista klickar man vidare in på hästen sida och ansöker om det.
        </TopText>
      </TopContainer>
      <HorseList />
    </>
  );
}

const TopContainer = styled.section`
  width: 100%;

  padding: 3rem;

  background-color: #9fd3c7;
  color: #385170;
`;
const Title = styled.h1`
  ${commonDimensions}

  border-bottom: 1px solid #385170;

  margin: 1rem auto;
  padding-bottom: 1rem;

  text-align: center;

  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;
`;

const TopText = styled.p`
  ${commonDimensions}

  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;

  text-align: justify;
  text-align-last: left;

  margin: 0 auto;
`;

export default Horses;
