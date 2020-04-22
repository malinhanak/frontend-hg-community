import React from 'react';
import styled from 'styled-components';

function DarkTheme({ children }) {
  return <Dark>{children}</Dark>;
}

const Dark = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #142d4c;
  color: white;
`;

export default DarkTheme;
