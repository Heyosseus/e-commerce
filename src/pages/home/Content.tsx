import { CaretRight } from 'phosphor-react';
import styled from 'styled-components';
import headphones from '../../assets/image-removebg-preview.png';
import speakers from '../../assets/image-removebg-preview(38).png';
import earphones from '../../assets/image-removebg-preview(42).png';

function Content() {
  return (
    <Container>
      <CardContainer>
        <Images src={headphones}></Images>
        <Card>
          <CardHeading>headphones</CardHeading>
          <ForShop>
            shop <CaretRight size={14} style={{ color: '#D87D4A' }} />
          </ForShop>
        </Card>
      </CardContainer>
      <CardContainer>
        <Images src={speakers}></Images>
        <Card>
          <CardHeading>speakers</CardHeading>
          <ForShop>
            shop <CaretRight size={14} style={{ color: '#D87D4A' }} />
          </ForShop>
        </Card>
      </CardContainer>
      <CardContainer>
        <Images src={earphones} style={{width: '99px', height: '99px'}}></Images>
        <Card>
          <CardHeading>earphones</CardHeading>
          <ForShop>
            shop <CaretRight size={14} style={{ color: '#D87D4A' }} />
          </ForShop>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default Content;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 24px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 210px;
  margin-top: 12px;
`;
const Images = styled.img`
  background-size: cover;
  width: 90px;
  height: 111px;
  z-index: 11;
`;
const Card = styled.div`
  width: 100%;
  height: 165px;
  border-radius: 8px;
  background: #e1e1e1;
  z-index: 1;
  position: absolute;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardHeading = styled.h1`
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 21px;
  color: black;
  margin-top: 44px;
`;

const ForShop = styled.div`
  color: gray;
  text-transform: uppercase;
  font-size: 13px;
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 12px;
`;