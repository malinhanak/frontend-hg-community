import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import MenuIcon from 'Styles/Icons/MenuIcon';
import SideDrawer from 'Components/SideDrawer';
import OpenNav from 'Components/OpenNav';
import WeatherContainer from 'Components/WeatherContainer';

function LightNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <SideDrawer
        show={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        links={<OpenNav onClick={() => setIsMenuOpen(!isMenuOpen)} />}
      />
      <NavContainer>
        <Nav>
          <WeatherContainer />
          <NavLink to={`/user/profile/:uid`}>Mitt stall</NavLink>
          <NavLink to={`/stable/:uid`}>Min Profil</NavLink>
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} show={isMenuOpen} />
        </Nav>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 10vh;
  background-color: #f4f3f3;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  height: 100%;
  color: white;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;

  a {
    margin-left: 1.5rem;
    color: #385170;
    text-decoration: none;
  }
`;

export default LightNav;
