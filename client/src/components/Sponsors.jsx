import React from "react";
import styled from "styled-components";
import Amazon from '../assets/images/Amazon.png';
import COBD from '../assets/images/COBD.png';
import GEF from '../assets/images/GEF.png';
import Google from '../assets/images/Google.png';
import Microsoft from '../assets/images/Microsoft.png';

const SponsorsWrapper = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const SponsorsHeading = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.2rem;
  text-align: center;
  color: #1BA821;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SponsorsLogos = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SponsorLogo = styled.img`
  height: 40px;
  margin: 0 1rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    height: 35px;
    margin: 0.5rem;
  }
`;

const Sponsors = () => {
  return (
    <SponsorsWrapper>
      <SponsorsHeading>Our Sponsors</SponsorsHeading>
      <SponsorsLogos>
        <SponsorLogo src={COBD} alt="Sponsor 1" />
        <SponsorLogo src={Google} alt="Sponsor 2" />
        <SponsorLogo src={Amazon} style={{ height: '60px', width: '150px' }} alt="Sponsor 3" />
        <SponsorLogo src={Microsoft} style={{ height: '50px', width: '170px' }} alt="Sponsor 4" />
        <SponsorLogo src={GEF} alt="Sponsor 5" />
      </SponsorsLogos>
    </SponsorsWrapper>
  );
};

export default Sponsors;
