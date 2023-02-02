import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data.json';

import { Button } from '../../styles/Button';

function ShopItems() {
  const { id } = useParams<{ id: any }>();
  const items = data.filter((item) => id === item.category).reverse();
  return (
      <div>
      <ItemNameContainer>{id}</ItemNameContainer>
      {items.map((item) => (
          <Container key={item.id}>
          <Image src={item.categoryImage.mobile} alt="" />
          <Header>{item.new ? 'new product' : ''}</Header>
          <ItemName>{item.name}</ItemName>
          <Paragraph>{item.description}</Paragraph>
          <Button>see product</Button>
        </Container>
      ))}
    </div>
  );
}

export default ShopItems;

const ItemNameContainer = styled.div`
  height: 102px;
  font-size: 28px;
  line-height: 102px;
  letter-spacing: 2px;
  background: black;
  opacity: 0.92;
  text-transform: uppercase;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;
const Header = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 10px;
  color: #d87d4a;
  text-transform: uppercase;
  margin-top: 32px;
`;
const Image = styled.img`
  width: 220px;
  height: 240px;
  background-size: cover;
  margin-top: 32px;
`;
const ItemName = styled.h2`
  font-size: 28px;
  color: black;
  line-height: 40px;
  text-align: center;
  width: 327px;
  letter-spacing: 1px;
  margin-top: 24px;
`;
const Paragraph = styled.p`
  color: black;
  opacity: 0.5;
  font-weight: 500;
  line-height: 25px;
  width: 327px;
  font-size: 15px;
  text-align: center;
  margin-top: 24px;
`;
