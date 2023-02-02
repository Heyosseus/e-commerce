import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart, List } from 'phosphor-react';

function Navbar() {
  return (
    <Container>
      <Link to="/menu">
        <List size={30} />
      </Link>
      <Heading> <Link to="/"> audiophile </Link></Heading>
      <Link to="/cart">
        <ShoppingCart size={30} />
      </Link>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: black;
  opacity: 0.92;
  height: 89px;

`;

export const Heading = styled.h1`
  font-size: 28px;
  color: white;
  margin-bottom: 12px;
`