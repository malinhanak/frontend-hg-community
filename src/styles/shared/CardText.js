import React from 'react';
import styled from 'styled-components';

function CardText(props) {
  return <Content id='non-icon-section'>{props.children}</Content>;
}

const Content = styled.div`
  width: 57%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;

  h3 {
    margin: 0 0 0.4rem 0;
    padding: 0;

    text-align: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 900;
  }

  p {
    text-align: justify;
    text-align-last: left;
    font-size: 0.74rem;
    font-style: italic;
    font-weight: 400;
    margin: 0 0 0.5rem 0;
  }
`;

export default CardText;
