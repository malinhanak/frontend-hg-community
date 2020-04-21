import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { DotSingle } from '@styled-icons/entypo';

function SideDrawer({ links, show, onClick, children }) {
  const content = (
    <CSSTransition in={show} timeout={200} classNames='slide-in-left' mountOnEnter unmountOnExit>
      <Drawer onClick={onClick}>
        <Header>
          <DotSingle size='20' /> Navigation <DotSingle size='20' />
        </Header>
        {links}
      </Drawer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

const Drawer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  height: 100vh;
  width: 30%;
  background-color: #385170;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const Header = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

  color: white;

  margin: 2rem auto;
`;

export default SideDrawer;
