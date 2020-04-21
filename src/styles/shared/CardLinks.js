import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CardLinks({ links }) {
  const linksMap = links
    ? links.map((link) => (
        <LinkStyle to={link.path} key={link.name}>
          {link.name}
        </LinkStyle>
      ))
    : null;

  return <Content id='links'>{linksMap}</Content>;
}

const Content = styled.div`
  width: 98%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const LinkStyle = styled(Link)`
  margin: 0.2rem 0.2rem 0 0;
  padding: 0.3rem;

  border: 1px solid #385170;
  background-color: rgba(56, 81, 112, 0.2);
  color: #385170;

  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.6rem;
`;

export default CardLinks;
