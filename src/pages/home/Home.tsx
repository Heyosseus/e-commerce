import styled from 'styled-components';
import headphones from '../../assets/home/mobile/image-header.jpg';
import { Button } from '../../styles/Button';
import Content from './Content';

function Home() {
  return (
    <div>
      <Container>
        <Heading>new product</Heading>
        <ItemName>XX99 Mark II HeadphoneS</ItemName>
        <Description>
          Experience natural, lifelike audio and exceptional build
          quality made for the passionate music enthusiast.
        </Description>
        <Button>see products</Button>
      </Container>
      <Content />
    </div>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 578px;
  background-image: url(${headphones});
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: .75;
`;

const ItemName = styled.h2`
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 40px;
    margin-top: 16px;
`
const Description = styled.p`
  font-weight: 500;
  font-size: 15px;
  opacity: 0.75;
  margin-top: 24px;
  width: 330px;
`;