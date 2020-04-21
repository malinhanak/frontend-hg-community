import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Key, Lock } from '@styled-icons/feather';

function OpenNav({ onClick }) {
  const auth = true;
  return (
    <Nav>
      <Link to={`/user/profile/:uid`} onClick={onClick}>
        Mitt stall
      </Link>
      <Link to={`/stable/:uid`} newdividerbottom={true.toString()} onClick={onClick}>
        Min Profil
      </Link>
      <Link to={`/horses`} onClick={onClick}>
        Hitta Häst
      </Link>
      <Link to={`/comp`} onClick={onClick}>
        Tävlingar
      </Link>
      <Link to={`/breeding`} onClick={onClick} disabled={true}>
        Avel
      </Link>
      <Link to={`/auction`} onClick={onClick} disabled={true}>
        Auktion
      </Link>
      {!auth ? (
        <Link to={`/login`} onClick={onClick} newdividertop={true.toString()}>
          <Key size='17' style={{ marginRight: '0.5rem' }} />
          Logga in
        </Link>
      ) : (
        <Link to={`/logout`} newdividertop={true.toString()}>
          <Lock size='17' style={{ marginRight: '0.5rem' }} />
          Logga ut
        </Link>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  width: 80%;
  height: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;

  margin: 0 auto;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  margin-bottom: ${(props) => (props.newdividerbottom === 'true' ? '2rem' : '1rem')};
  margin-top: ${(props) => (props.newdividertop === 'true' ? '2rem' : '0')};
  color: white;
  text-decoration: ${(props) => (props.disabled ? 'line-through' : 'none')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export default OpenNav;
