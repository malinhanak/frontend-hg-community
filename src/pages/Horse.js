import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { commonDimensions } from 'Styles/Containers/commonDimensions';
import { DappleGrey } from 'Assets/';

const DUMMY_HORSES = [
  {
    name: 'Svarten',
    id: '0001',
    cat: 'D',
    coat: 'Svart',
    gender: 'Valack',
    height: '145',
    breed: 'Tysk Ridponny',
    type: 'pony',
    slug: 'svarten',
    traits: {
      skills: ['Hoppning', 'Dressyr'],
      personal: ['Hetlevrad', 'Älskar att hoppa', 'Lite vild ute i skogen', 'Lite bakskygg', 'Trevlig i stallet'],
    },
  },
  {
    name: 'Pelle',
    id: '0002',
    cat: 'A',
    coat: 'Fux',
    gender: 'Valack',
    height: '105',
    breed: 'Shetlandsponny',
    type: 'pony',
    slug: 'pelle',
    traits: {
      skills: ['Körning'],
      personal: ['Bits', 'Frammåt', 'Älskar mat'],
    },
  },
  {
    name: 'Gullan',
    id: '0003',
    cat: 'Varmblod',
    coat: 'Skimmel',
    gender: 'Sto',
    height: '162',
    breed: 'Svenskt Varmblod',
    type: 'horse',
    slug: 'gullan',
    traits: {
      skills: ['Dressyr', 'Markdressyr', 'Körning'],
      personal: ['Lite hispig', 'Snäll', 'Grinig i boxen'],
    },
  },
];

function Horse(props) {
  const [foundHorse, setFoundHorse] = useState(false);
  const [horse, setHorse] = useState(null);
  const [available, setAvailable] = useState(true);
  const params = useParams();

  const lookingFor = (slug) => DUMMY_HORSES.some((horse) => horse.slug === slug);
  const getHorse = (slug) => DUMMY_HORSES.filter((horse) => horse.slug === slug);
  const generateSkillTraits = (traits) => traits.map((trait) => <TraitsItem key={trait}>{trait}</TraitsItem>);
  const generatePersonalTraits = (traits) => traits.map((trait) => <TraitsItem key={trait}>{trait}</TraitsItem>);

  useEffect(() => {
    if (lookingFor(params.slug)) {
      setFoundHorse(true);
    } else {
      setFoundHorse(false);
    }
  }, [params, foundHorse]);

  useEffect(() => {
    if (foundHorse) {
      const horsy = getHorse(params.slug);
      setHorse(horsy[0]);
      console.log('horse', horsy[0].name);
    }
  }, [foundHorse]);

  if (!foundHorse) {
    return 'No horse found';
  }

  console.log('horse state', horse);
  return horse ? (
    <>
      <TopContainer>
        <Title>{horse.name}</Title>
        <Traits>
          {generateSkillTraits(horse.traits.skills)}
          {generatePersonalTraits(horse.traits.personal)}
        </Traits>
      </TopContainer>
      <HorseContainer>
        <Image src={DappleGrey} alt={horse.name} />
        <p>
          Apple pie sugar plum cake. Icing tart I love gingerbread danish chocolate cake croissant. Gummies croissant caramels
          cake gingerbread. Cookie jelly beans jujubes jelly toffee apple pie. Candy macaroon I love liquorice I love soufflé
          cookie I love biscuit. Caramels wafer bonbon. Croissant brownie gummies jelly-o dessert ice cream. Pie chupa chups
          macaroon liquorice tiramisu carrot cake soufflé marshmallow. Icing cheesecake bonbon chocolate bar gummies gummies oat
          cake brownie. Topping tart cake lollipop apple pie. Chupa chups apple pie wafer cake biscuit. Cupcake tootsie roll
          sesame snaps fruitcake macaroon oat cake chocolate cake I love jelly beans.
        </p>
        <p>
          Topping cake fruitcake biscuit cupcake dessert topping tootsie roll pie. I love sweet cotton candy halvah tiramisu I
          love sweet jelly-o I love. Cake cheesecake sweet roll powder gummies tart. Cake cupcake pastry chocolate bonbon
          chocolate cake. I love chupa chups dessert apple pie halvah macaroon. I love jelly beans marshmallow. Gummies carrot
          cake macaroon pie. Sweet roll dessert dragée marzipan gummies halvah pudding. Ice cream tiramisu fruitcake jelly danish.
          Halvah candy canes lemon drops tootsie roll cupcake jujubes soufflé jelly I love. Liquorice soufflé carrot cake sesame
          snaps jelly donut. Marshmallow gingerbread gummies cake chocolate bar. Sweet cupcake brownie soufflé bonbon toffee. Bear
          claw gingerbread macaroon jelly tootsie roll pie jelly beans lollipop. Lemon drops marzipan soufflé dragée fruitcake
          sugar plum toffee lollipop jelly beans.
        </p>
        <p>
          Cupcake toffee icing chocolate cake brownie I love. Oat cake cotton candy chocolate bear claw marshmallow cake. Wafer
          pudding chupa chups icing bonbon. Danish jelly croissant. Powder cookie pie apple pie cookie apple pie dragée chocolate
          cake chocolate cake. Chocolate sugar plum I love sweet cotton candy marshmallow jelly beans. I love caramels icing
          gingerbread liquorice carrot cake. Oat cake chocolate jujubes sesame snaps liquorice danish danish. I love candy canes
          pastry. Bear claw apple pie I love cheesecake pudding bonbon I love apple pie ice cream. Tootsie roll icing lollipop
          croissant cake. Cupcake dragée tiramisu marzipan tootsie roll marshmallow tart candy canes gummies. Gingerbread I love
          pudding lemon drops gummi bears oat cake toffee I love.
        </p>
        {available && (
          <section>
            <button>Hyr {horse.name}</button> <button>Bli skötare åt {horse.name}</button>
          </section>
        )}
      </HorseContainer>
      <PrizeContainer>
        <h4>Priser (1-3)</h4>
        <PrizeList>
          <PrizeItemWrap className='header'>
            <PrizeItem className='header-cell'></PrizeItem>
            <PrizeItem className='header-cell'>Tävling</PrizeItem>
            <PrizeItem className='header-cell'>Gren</PrizeItem>
            <PrizeItem className='header-cell'>Nivå</PrizeItem>
            <PrizeItem className='header-cell'>Ryttare</PrizeItem>
          </PrizeItemWrap>
          <PrizeItemWrap>
            <PrizeItem>1.</PrizeItem>
            <PrizeItem>Sommar Grand Prix 2019</PrizeItem>
            <PrizeItem>Dressyr</PrizeItem>
            <PrizeItem>Nivå 2</PrizeItem>
            <PrizeItem>Anna Andersson</PrizeItem>
          </PrizeItemWrap>
        </PrizeList>
      </PrizeContainer>
    </>
  ) : (
    'Loading...'
  );
}

const Image = styled.img`
  max-width: 350px;
  height: auto;

  float: left;
`;

const HorseContainer = styled.section`
  ${commonDimensions}
  width: 70vw;

  font-family: 'Roboto', sans-serif;
  text-align: justify;
  text-align-last: left;
  font-weight: 300;
  font-size: 0.9rem;

  color: #385170;

  margin: 1.5rem auto 3rem auto;

  p {
    margin-bottom: 0.5rem;
  }
`;

const PrizeContainer = styled.section`
  ${commonDimensions}
  width: 70vw;

  font-family: 'Roboto', sans-serif;
  text-align: justify;
  text-align-last: left;
  font-weight: 300;
  font-size: 0.9rem;

  color: #385170;
  border-top: 1px solid #385170;

  margin: 1.5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h4 {
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;

    margin-bottom: 1.5rem;
  }
`;

const PrizeList = styled.section`
  width: 100%;

  font-family: 'Roboto', sans-serif;
  text-align: left;
  font-weight: 300;
  font-size: 0.9rem;

  color: #385170;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  article:nth-child(even) {
    background: #e3e3e3;
  }

  .header {
    border-bottom: 1px solid #385170;
  }
`;

const PrizeItemWrap = styled.article`
  width: 100%;

  font-family: 'Roboto', sans-serif;
  text-align: left;
  font-weight: 300;
  font-size: 0.9rem;

  color: #385170;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const PrizeItem = styled.p`
  flex: ${(props) => props.flex || '1'};

  padding: 0.4rem;
  margin: 0;

  &.header-cell {
    font-weight: 400;
  }

  :first-of-type {
    max-width: 20px;
  }
  :last-of-type {
    text-align: right;
  }
`;

const TopContainer = styled.section`
  width: 100%;

  padding: 3rem;

  background-color: #9fd3c7;
  color: #385170;
`;
const Title = styled.h1`
  ${commonDimensions}

  border-bottom: 1px solid #385170;

  margin: 0 auto 1rem auto;
  padding-bottom: 1rem;

  text-align: center;

  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;
`;

const Traits = styled.section`
  ${commonDimensions}

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto 1rem auto;
`;

const TraitsItem = styled.article`
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.5rem 1rem;

  background-color: #ececec;
  color: #385170;

  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.7rem;
`;

export default Horse;
