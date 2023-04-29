import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #2C6BD3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  font-size: 14px;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const SocialIconLink = styled.a`
  color: #fff;
  margin-left: 10px;
  font-size: 18px;

  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 5px 0;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSection>
        <SocialIcons>
          <SocialIconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterestP />
          </SocialIconLink>
        </SocialIcons>
      </FooterSection>
      <FooterSection>
        © 2023 - EnviroHive | Designed & Developed by <ContactLink href='https://linkedin.com/in/himadhusudan' target='_blank'>Madhusudan Kumar</ContactLink>
      </FooterSection>
      <FooterSection>
        Contact Us: <ContactLink href="mailto:help@enviro.hive" target='_blank'>help@enviro.hive</ContactLink>
      </FooterSection>
    </StyledFooter>
  );
};

export default Footer;
