import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading } from './Navbar';
import { FacebookLogo } from 'phosphor-react';
import { TwitterLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';

function Footer() {
  return (
    <FooterContainer>
      <FooterCard>
        <Heading style={{ marginTop: '32px' }}>audiophile</Heading>
        <div>
          <Links>
            <Link to="/">home</Link>
          </Links>
          <Links>headphones</Links>
          <Links>speakers</Links>
          <Links>earphones</Links>
        </div>
        <FooterContent>
          Audiophile is an all in one stop to fulfill your audio
          needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out
          of personal audio. Come and visit our demo facility - we’re
          open 7 days a week.
        </FooterContent>
        <FooterContent>
          Copyright 2023. All Rights Reserved
        </FooterContent>
        <MediaIcons>
          <FacebookLogo
            size={26}
            color="white"
            style={{ margin: '0 8px' }}
          />
          <TwitterLogo
            size={26}
            color="white"
            style={{ margin: '0 8px' }}
          />
          <InstagramLogo
            size={26}
            color="white"
            style={{ margin: '0 8px' }}
          />
        </MediaIcons>
      </FooterCard>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 64px;
`;
const FooterCard = styled.div`
  background: black;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Links = styled.h2`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 12px;
`;

const FooterContent = styled.p`
  font-size: 14px;
  opacity: 0.75;
  padding: 24px;
  line-height: 26px;
  font-weight: 500;
`;

const MediaIcons = styled.div`
  display: flex;
  justify-content: center;
`;
