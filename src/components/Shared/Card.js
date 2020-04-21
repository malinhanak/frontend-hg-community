import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CardText from 'Styles/shared/CardText';
import CardLinks from 'Styles/shared/CardLinks';

function Card(props) {
  const { children, title, icon, links, flexDir } = props;
  const display = !!props.flexDir;

  return (
    <CardStyle {...props}>
      {icon}
      {props.flexDir && <h3>{props.href ? <Link to={props.href}>{title}</Link> : title}</h3>}
      {!display && (
        <CardText>
          <h3>{props.href ? <Link to={href}>{title}</Link> : title}</h3>
          {children && <p id='content'>{children}</p>}
          {links && <CardLinks links={links} />}
        </CardText>
      )}
    </CardStyle>
  );
}

const CardStyle = styled.article`
  width: ${(props) => props.width || '25%'};
  max-width: 50%;
  height: 30vh;
  max-height: 300px;

  margin: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: ${(props) => props.flexDir || 'row'};
  justify-content: ${(props) => (props.flexDir ? 'center' : 'space-between')};
  align-items: center;

  background-color: ${(props) => props.bgColor || '#ffffff'};
  border: 1px solid ${(props) => props.bgColor || '#d2d6da'};
  border-radius: ${(props) => props.radius || '8px'};
  color: ${(props) => props.color || '#385170'};

  -webkit-box-shadow: 0px 0px 13px -5px rgba(56, 81, 112, 0.75);
  -moz-box-shadow: 0px 0px 13px -5px rgba(56, 81, 112, 0.75);
  box-shadow: 0px 0px 13px -5px rgba(56, 81, 112, 0.75);

  h3 {
    margin: 0.5rem 0 0.4rem 0;
    padding: 0;

    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 900;

    a {
      color: ${(props) => props.color || '#385170'};
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export default Card;
