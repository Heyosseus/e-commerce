import React from 'react';
import styled from 'styled-components';
import { Container } from './Content';
import { Card } from './Items';
import man from '../../assets/shared/mobile/image-best-gear.jpg';

function AudioInfo() {
  return (
    <Container style={{marginTop: '24px'}}>
      <ContainerCard>
        <Image src={man}></Image>
        <Heading>
          Bringing you the{' '}
          <span style={{ color: '#D87D4A' }}>best</span> audio gear
        </Heading>
        <Paragraph>
          Located at the heart of New York City, Audiophile is the
          premier store for high end headphones, earphones, speakers,
          and audio accessories. We have a large showroom and luxury
          demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Paragraph>
      </ContainerCard>
    </Container>
  );
}

export default AudioInfo;

export const ContainerCard = styled(Card)`
  background: transparent;
  gap: 28px;
`;

const Image = styled.img`
  background-size: cover;
  height: 320px;
  border-radius: 8px;
`;

const Heading = styled.h1`
    font-size: 28px;
    line-height: 38px;
    color: black;
    text-transform: uppercase;
    text-align: center;
`
const Paragraph = styled.p`
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-align: center;
    opacity: 0.5;
`