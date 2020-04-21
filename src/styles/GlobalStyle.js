import { createGlobalStyle } from 'styled-components';

import { cssReset } from './cssReset';

export const GlobalStyle = createGlobalStyle`
  ${cssReset}

  * { box-sizing: border-box; }

  html {
    font-size: 16px;
    font-weight: 300;
    background-color: #f4f3f3;
  }
  body {
    width: 100vw;
    max-width:100%;
    height: 100%;
    min-height: 110vh;
    color: #385170;
  }

  #root {
    height: 100%;
    margin-bottom: 0;
    padding: 0;
  }

  .slide-in-left-enter {
  transform: translateX(-100%);
}

.slide-in-left-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 200ms;
}

.slide-in-left-exit {
  transform: translateX(0%);
  opacity: 1;
}

.slide-in-left-exit-active {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 200ms;
}
`;
