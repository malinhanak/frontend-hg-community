import React from 'react';
import styled from 'styled-components';

import HorseItem from 'Components/Horses/HorseItem';
import { commonDimensions } from 'Styles/Containers/commonDimensions';

const DUMMY_HORSES = [
  { name: 'Svarten', id: '0001', type: 'pony', slug: 'svarten' },
  { name: 'Pelle', id: '0002', type: 'pony', slug: 'pelle' },
  { name: 'Gullan', id: '0003', type: 'horse', slug: 'gullan' },
];

function HorseList() {
  return (
    <ListContainer id='horse-list-container'>
      <HorseItem horses={DUMMY_HORSES} />
    </ListContainer>
  );
}

const ListContainer = styled.section`
  ${commonDimensions}
  width: 70vw;

  margin: 1rem auto;
`;

export default HorseList;
