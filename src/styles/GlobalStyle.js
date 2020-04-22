import { createGlobalStyle } from 'styled-components';

import { cssReset } from './cssReset';

export const GlobalStyle = createGlobalStyle`
  ${cssReset}

  #root {
  height: 100%;
  margin-bottom: 0;
  padding: 0;
}
`;
