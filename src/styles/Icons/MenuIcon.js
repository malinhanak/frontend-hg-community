import React from 'react';
import styled from 'styled-components';

import { CloseOutline, MenuOutline } from '@styled-icons/evaicons-outline';

function MenuIcon({ onClick, show }) {
  return (
    <Icon onClick={onClick} location={location.pathname}>
      {show ? <CloseOutline size='30' /> : <MenuOutline size='30' />}
    </Icon>
  );
}

const Icon = styled.section`
  color: white;
  margin: 0 1.5rem;
  /* position: absolute;
  top: 10vh;
  left: 75vw; */
  cursor: pointer;
  color: #385170;
`;

export default MenuIcon;
