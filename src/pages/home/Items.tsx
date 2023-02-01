import React from 'react';
import styled from 'styled-components';
import { Container } from './Content';
import { Button } from '../../styles/Button';
import speakers from '../../assets/image-removebg-preview(38).png';
import zx7 from '../../assets/image-speaker-zx7-removebg-preview.png';
import yx1 from '../../assets/home/mobile/image-earphones-yx1.jpg';

function Items() {
  return (
    <Container>
      <Card>
        <Images src={speakers}></Images>
        <ItemName>ZX9 SPEAKER</ItemName>
        <ItemDescription>
          Upgrade to premium speakers that are phenomenally built to
          deliver truly remarkable sound.
        </ItemDescription>
        <Button style={{ background: 'black' }}>see products</Button>
      </Card>
      <CardForSecondItem>
        <Wrapper>
          <ItemCardName>ZX7 SPEAKER</ItemCardName>
          <Button style={{ background: '#80808063', color: 'black' }}>
            see products
          </Button>
        </Wrapper>
        <SecondItemImage src={zx7}></SecondItemImage>
      </CardForSecondItem>
      <ThirdItemImage src={yx1}></ThirdItemImage>
      <ItemCard>
        <ItemCardName>YX1 EARPHONES</ItemCardName>
        <Button style={{ background: '#80808021', color: 'black' }}>
          see product
        </Button>
      </ItemCard>
    </Container>
  );
}

export default Items;

export const Card = styled.div`
  width: 100%;
  height: 600px;
  background: #d87d4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 6px;
`;

const Images = styled.img`
  background-size: cover;
  width: 126px;
  height: 151px;
`;

const ItemName = styled.h1`
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.3px;
  width: 160px;
  text-align: center;
  margin-top: 26px;
`;

const ItemDescription = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.75;
  font-weight: 500;
  text-align: center;
  width: 260px;
`;

const CardForSecondItem = styled(Card)`
  margin-top: 24px;
  height: 320px;
  background: #b6b3b33e;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  position: relative;
`;
const Wrapper = styled.div`
  width: 80%;
  z-index: 1;
  position: absolute;
`;
const SecondItemImage = styled.img`
  background-size: cover;
  height: 315px;
  width: 250px;
  margin-left: auto;
  z-index: 0;
  position: relative;
`;


const ThirdItemImage = styled.img`
  background-size: cover;
  height: 200px;
  width: 100%;
  border-radius: 8px;
  margin-top: 24px;
`;

const ItemCard = styled.div`
  height: 200px;
  background: #80808021;
  border-radius: 8px;
  padding-left: 24px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemCardName = styled(ItemName)`
  color: black;
  font-size: 26px;
  letter-spacing: 2px;
  width: 240px;
  text-align: left;
`;