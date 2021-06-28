import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTS } from '../constants';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroImage1 src='/assets/HeroSectionImage1.JPG' alt='My hero picture' />
      <HeroImage2 src='/assets/IMG_8815.JPG' alt='My hero picture' />
      <HeroH1>Hi there, I'm Lu Yao.</HeroH1>
      <HeroH2>
        A quantity surveyor who is trying to learn new skills and venture into
        the world of codes.
      </HeroH2>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: min(80vh, 500px);
  background-size: cover;
  background-position: bottom center;
  padding-top: 20px;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  /* background: -webkit-linear-gradient(
    0deg,
    ${COLORS.gray[900]},
    ${COLORS.gray[100]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const HeroImage1 = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage2 = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
    height: auto;
    margin-top: -64px;
    overflow: hidden;
  }
`;

const HeroH1 = styled.h1`
  font-size: ${FONTS.title};

  @media (max-width: 768px) {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 14px;
    right: 0;
    top: 46%;
    text-align: left;
    width: 100%;
    color: black;
    font-size: ${FONTS.heading};
  }
`;

const HeroH2 = styled.h2`
  font-size: ${FONTS.medium};
`;

export default HeroSection;
