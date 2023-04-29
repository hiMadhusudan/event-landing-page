import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaUsers, FaChalkboardTeacher, FaGlobe, FaCertificate } from 'react-icons/fa';

const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  margin-top: 2rem;
  color: #1BA821;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  text-align: center;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Features = () => {
  return (
    <div>
      <Title>Features</Title>
      <FeaturesWrapper>
        <FeatureCard>
          <FeatureIcon><FaCalendarAlt /></FeatureIcon>
          <FeatureTitle>Online Event</FeatureTitle>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaUsers /></FeatureIcon>
          <FeatureTitle>Panel Discussion</FeatureTitle>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaChalkboardTeacher /></FeatureIcon>
          <FeatureTitle>Interactive Workshops</FeatureTitle>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaGlobe /></FeatureIcon>
          <FeatureTitle>Expert Keynote Speakers</FeatureTitle>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaCertificate /></FeatureIcon>
          <FeatureTitle>Certificate of Participation</FeatureTitle>
        </FeatureCard>
      </FeaturesWrapper>
    </div>
  );
};

export default Features;
