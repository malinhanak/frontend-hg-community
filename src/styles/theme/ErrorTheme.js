import React from 'react';
import styled from 'styled-components';

import LightNav from 'Components/LightNav';

function ErrorTheme({ children }) {
  return (
    <Error>
      <LightNav />
      {children}
    </Error>
  );
}

const Error = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #142d4c;
  color: white;
`;

export default ErrorTheme;
