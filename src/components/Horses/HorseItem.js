import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function HorseItem({ horses }) {
  const history = useHistory();

  const handleOnClick = (slug) => history.push(`/horse/${slug}`);

  const listing = horses.map((horse) => {
    return (
      <Item key={horse.id}>
        <p>{horse.name}</p>
        <p>{horse.type === 'pony' ? 'Ponny' : 'Häst'}</p>
        <ReadMore onClick={() => handleOnClick(horse.slug)}>Läs mer</ReadMore>
      </Item>
    );
  });

  return (
    <>
      <Item className='header'>
        <p className='header-cell'>Namn</p>
        <p className='header-cell'>Type</p>
      </Item>
      {listing}
    </>
  );
}

const Item = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0.8rem;

  font-size: 0.86rem;
  font-weight: 400;

  &.header {
    background-color: #385170;
    color: #ececec;
  }

  :nth-child(even) {
    background-color: rgba(159, 211, 199, 0.1);
  }

  p {
    margin: 0 1rem 0 0;
    text-align: left;
  }

  p:first-of-type {
    width: 50%;
  }

  p:nth-child(2) {
    width: 20%;
    margin-right: auto;
  }

  p.header-cell {
    font-weight: bold;
    text-transform: uppercase;
  }
  p.header-cell:last-of-type {
    margin-right: auto;
  }
`;

const ReadMore = styled.button`
  color: #ececec;
  background-color: #385170;

  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;

  border: none;
  border-radius: 5px;

  padding: 0.4rem 1.5rem;
`;

export default HorseItem;
