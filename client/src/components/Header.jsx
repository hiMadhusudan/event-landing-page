import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c6bd3;
  padding: 0.1rem 1rem;
  font-family: "Russo One", sans-serif;
  color: #fff;
  letter-spacing: 0.1rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 3rem;
`;

const Navigation = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 4.5rem;
  padding: 0.3rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 10px;

  :hover {
    background-color: #fff;
    color: #2c6bd3;
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const Header = ({ scrollToSection, featuresRef, scheduleRef, speakersRef }) => {
  return (
    <HeaderWrapper>
      <a href={window.location.href}>
        <Logo src="https://himadhusudan.com/blog/wp-content/uploads/2023/04/EnviroHive-Logo.png" alt="Logo" />
      </a>
      <Navigation>
        <NavigationLink onClick={() => scrollToSection(featuresRef)}>Feature</NavigationLink>
        <NavigationLink onClick={() => scrollToSection(scheduleRef)}>Schedule</NavigationLink>
        <NavigationLink onClick={() => scrollToSection(speakersRef)}>Speakers</NavigationLink>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
