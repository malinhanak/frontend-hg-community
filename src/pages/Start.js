import React from 'react';
import styled from 'styled-components';
import { Trophy } from '@styled-icons/evil';
import { Book, Heart, Shield, ShoppingCart, Star, ChevronsRight } from '@styled-icons/feather';

import { LandingImage, Title } from 'Assets';
import Card from 'Components/Shared/Card';

const compLinks = [
  { name: 'alla', path: 'shows/all' },
  { name: 'grand prix', path: 'shows/prix' },
];

function Start() {
  return (
    <>
      <Top id='top'>
        <Landing id='landing'>
          <img src={Title} alt='Horse Galore' />
        </Landing>
      </Top>
      <CardColumn>
        <Flex>
          <Card width={'60%'} icon={<Trophy size='100' />} title='Tävling' links={compLinks}>
            Tävla med dina hästar och vinn fina priser och ranking!
          </Card>
          <Card width={'40%'} icon={<Book size='80' />} title='Skötardagbok' links={null}>
            Skötardagboken, här för du journal av livet som skötare, hästägare eller vilken roll du
            nu än har.
          </Card>
        </Flex>
        <Flex>
          <Card width={'20%'} icon={<Shield size='70' />} flexDir='column' title='Regler' />
          <Card
            width={'20%'}
            icon={<Star size='70' />}
            flexDir='column'
            title='Hitta häst'
            href='/horses'
          />
          <Card
            width={'20%'}
            icon={<Heart size='70' />}
            flexDir='column'
            title='Avel'
            bgColor='#ebd1d1'
          />
          <Card
            width={'20%'}
            icon={<ShoppingCart size='70' />}
            flexDir='column'
            title='Auktioner'
            bgColor='#ebd1d1'
          />
        </Flex>
      </CardColumn>
      <AnnouncementRow>
        <Announcement>
          <ChevronsRight size='50' /> Sommar Grand Prix öppen!
          <small>Tävlingsanmälan för Sommar Grand Prixen är nu öppen!</small>
        </Announcement>
      </AnnouncementRow>
      <TopListRow>
        <TopListHeader>Topplista: Ryttare</TopListHeader>
        <TopList>
          <p>1. För och efternamn</p>
          <p>2. För och efternamn</p>
          <p>3. För och efternamn</p>
          <p>4. För och efternamn</p>
          <p>5. För och efternamn</p>
          <p>6. För och efternamn</p>
          <p>7. För och efternamn</p>
          <p>8. För och efternamn</p>
          <p>9. För och efternamn</p>
          <p>10. För och efternamn</p>
        </TopList>
      </TopListRow>
    </>
  );
}

const Top = styled.section`
  width: 100%;
  height: 50vh;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${LandingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
`;

const Landing = styled.article`
  width: 55%;
  max-height: 80%;
  background: rgba(0, 0, 0, 0.4);
  font-family: 'Roboto', sans-serif;
  padding: 2rem 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const Flex = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardColumn = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  max-width: 70vw;
  margin: 2rem auto;

  color: #385170;
`;

const AnnouncementRow = styled(Flex)`
  justify-content: center;
  align-items: center;

  width: 100vw;
  max-width: 100%;
  height: 40vh;
  max-height: 20%;

  margin: 3rem 0;

  background-color: ${(props) => props.bg || '#385170'};
  color: ${(props) => props.color || '#ececec'};
`;

const Announcement = styled.article`
  width: 60vw;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 2.5rem;

  small {
    display: block;
    font-size: 38%;
  }
`;

const TopListRow = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  max-width: 100%;
  max-height: 277px;

  margin: 3rem 0;

  background-color: ${(props) => props.bg || 'transparent'};
  color: ${(props) => props.color || '#385170'};
`;

const TopListHeader = styled.h3`
  width: 50vw;
  margin: 0 auto 0.5rem auto;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 4rem;
  text-align: center;
`;

const TopList = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 50vw;
  height: 122px;
  max-height: 100%;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1rem;

  p {
    margin: 0 auto 0.7rem auto;
  }

  p:last-of-type {
    margin-bottom: auto;
  }
`;

export default Start;
