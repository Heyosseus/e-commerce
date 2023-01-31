import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart, List } from 'phosphor-react';

function Navbar() {
  return (
    <Contaier>
      <Link to="/menu">
        <List size={30} />
      </Link>
      <Heading> <Link to="/"> audiophile </Link></Heading>
      <Link to="/cart">
        <ShoppingCart size={30} />
      </Link>
    </Contaier>
  );
}

export default Navbar;

const Contaier = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #191919;
  height: 89px;

`;

const Heading = styled.h1`
  font-size: 28px;
  color: white;
  margin-bottom: 12px;
`