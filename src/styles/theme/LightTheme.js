import React, { useEffect } from 'react';
import styled from 'styled-components';

import LightNav from 'Components/LightNav';

function LightTheme({ children }) {
  useEffect(() => {
    console.log('loading...');
  }, []);
  return (
    <Light>
      <LightNav />
      <Container id='outer-container'>{children}</Container>
    </Light>
  );
}

const Light = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  color: #385170;
  margin-bottom: 0;
`;

const Container = styled.section`
  margin-top: 10vh;

  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;

export default LightTheme;
