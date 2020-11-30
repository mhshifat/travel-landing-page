import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiences for our customers.</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsorships</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.h1`
  padding: 5rem calc((100vw - 1300px) / 2 );
  font-size: 14px;
  display: grid;  
  margin-bottom: 16px;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;