import React from 'react';
import styled from 'styled-components';

function DarkTheme({ children }) {
  return <Dark>{children}</Dark>;
}

const Dark = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;

export default DarkTheme;
