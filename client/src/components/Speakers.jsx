import React from "react";
import styled from "styled-components";
import Emma from '../assets/images/Speaker1.png';
import Jack from '../assets/images/Speaker2.png';
import Lily from '../assets/images/Speaker3.png';

const SpeakersWrapper = styled.div`
  text-align: center;
`;

const SpeakersHeading = styled.h2`
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

const SpeakersCardsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SpeakerCard = styled.div`
  width: 300px;
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const SpeakerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const SpeakerName = styled.h3`
  font-size: 1rem;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.2rem;
  font-weight: lighter;
  margin-top: 1rem;
`;

const SpeakerBio = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Speakers = () => {
  return (
    <SpeakersWrapper>
      <SpeakersHeading>Speakers</SpeakersHeading>
      <SpeakersCardsWrapper>
        <SpeakerCard>
          <SpeakerImage src={Emma} alt="Speaker 1" />
          <SpeakerName>Emma Doe</SpeakerName>
          <SpeakerBio>
            Emma is an expert in environmental engineering and sustainability.
          </SpeakerBio>
        </SpeakerCard>
        <SpeakerCard>
          <SpeakerImage src={Jack} alt="Speaker 2" />
          <SpeakerName>Jack Smith</SpeakerName>
          <SpeakerBio>
            Jack is a researcher and professor of climate change at a leading university.
          </SpeakerBio>
        </SpeakerCard>
        <SpeakerCard>
          <SpeakerImage src={Lily} alt="Speaker 3" />
          <SpeakerName>Lily Johnson</SpeakerName>
          <SpeakerBio>
            Lily is the CEO of a renewable energy company and a thought leader in the industry.
          </SpeakerBio>
        </SpeakerCard>
      </SpeakersCardsWrapper>
    </SpeakersWrapper>
  );
};

export default Speakers;
