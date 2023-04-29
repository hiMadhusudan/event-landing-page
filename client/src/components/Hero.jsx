import React from "react";
import styled from "styled-components";
import natureHero from '../assets/images/nature-hero.jpg';
import drop from '../assets/audios/drop.mp3'; 

const HeroWrapper = styled.section`
  background-image: url(${natureHero});
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-position: center;
  background-blend-mode: darken;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 60rem;
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  margin-top: 6rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-top: 2rem;
  }
`;

const Colon = styled.h1`
  font-size: 3.6rem;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  text-align: center;
  margin-bottom: 4.4rem;
  font-family: 'Russo One', sans-serif;
  color: #fff;
`;

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.2rem;
  align-items: center;
  margin: 0 1rem;
`;

const CountdownNumber = styled.span`
  font-size: 3rem;
  color: #fff;
`;

const CountdownLabel = styled.span`
  font-size: 1rem;
  color: #fff;
`;

const RegisterButton = styled.button`
  background-color: #1BA821;
  color: #fff;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.2rem;
  padding: 1rem 2rem;
  border: 2px solid #1BA821;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 0.5rem;

  :hover {
    background-color: #fff;
    color: #1BA821;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
`;

const HeroSection = ({ scrollToSection, registrationRef }) => {
  const audio = new Audio(drop);
  audio.autoplay = true;
  audio.muted = true; 
  const countdownDate = new Date("2023-05-26T20:50:00+05:30");

const [days, setDays] = React.useState("");
const [hours, setHours] = React.useState("");
const [minutes, setMinutes] = React.useState("");
const [seconds, setSeconds] = React.useState("");
const [isHovering, setIsHovering] = React.useState(false);


const calculateTimeLeft = () => {
  const difference = +countdownDate - +new Date();

  if (difference > 0) {
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
    const secondsLeft = Math.floor((difference / 1000) % 60);

    setDays(daysLeft);
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
  }
};

const handleMouseOver = () => {
  setIsHovering(true);
};

const handleMouseOut = () => {
  setIsHovering(false);
};

React.useEffect(() => {
  const timer = setInterval(() => {
    calculateTimeLeft();
    audio.play();
  }, 1000);

  if (isHovering) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }

  return () => {
    clearInterval(timer);
  };
}, [isHovering]);

return (
  <HeroWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <Title>Tech and the Environment: Balancing Innovation and Sustainability</Title>
    <CountdownWrapper>
      <CountdownItem>
        <CountdownNumber>{days}</CountdownNumber>
        <CountdownLabel>day</CountdownLabel>
      </CountdownItem>
      <Colon>:</Colon>
      <CountdownItem>
        <CountdownNumber>{hours}</CountdownNumber>
        <CountdownLabel>hr</CountdownLabel>
      </CountdownItem>
      <Colon>:</Colon>
      <CountdownItem>
        <CountdownNumber>{minutes}</CountdownNumber>
        <CountdownLabel>min</CountdownLabel>
      </CountdownItem>
      <Colon>:</Colon>
      <CountdownItem>
        <CountdownNumber>{seconds}</CountdownNumber>
        <CountdownLabel>sec</CountdownLabel>
      </CountdownItem>
    </CountdownWrapper>
    <RegisterButton  onClick={() => scrollToSection(registrationRef)}>Register Now</RegisterButton>
  </HeroWrapper>
);
};

export default HeroSection;