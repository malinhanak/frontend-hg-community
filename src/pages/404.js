import React from 'react';
import styled from 'styled-components';

import { Title } from 'Assets';

function Page404() {
  return (
    <>
      <Image src={Title} alt='Horse Galore' />
      <Error404>
        404 <small>Sidan finns inte</small>
      </Error404>
    </>
  );
}

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const Error404 = styled.h1`
  width: 50%;

  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  font-size: 6rem;

  margin: 0;
  padding: 0;

  small {
    display: block;
    font-size: 30%;
  }
`;

export default Page404;
