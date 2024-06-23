import {
  FooterSection,
  FooterLinks,
  FooterLinkItem,
  FooterLinkHeader,
  FooterLinkParagraph,
  FooterImageContainer,
  FooterBottom,
  FooterLinkParagraph2,
  Rights,
  Logos,
} from "./styles";

import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";

import fb from "../../assets/fb.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterLinks>
        <FooterLinkItem>
          <FooterLinkHeader>Company Info</FooterLinkHeader>
          <FooterLinkParagraph>About Us</FooterLinkParagraph>
          <FooterLinkParagraph>Carrier</FooterLinkParagraph>
          <FooterLinkParagraph>We are hiring</FooterLinkParagraph>
          <FooterLinkParagraph>Blog</FooterLinkParagraph>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLinkHeader>Legal</FooterLinkHeader>
          <FooterLinkParagraph>About Us</FooterLinkParagraph>
          <FooterLinkParagraph>Carrier</FooterLinkParagraph>
          <FooterLinkParagraph>We are hiring</FooterLinkParagraph>
          <FooterLinkParagraph>Blog</FooterLinkParagraph>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLinkHeader>Features</FooterLinkHeader>
          <FooterLinkParagraph>Business Marketing</FooterLinkParagraph>
          <FooterLinkParagraph>User Analytic</FooterLinkParagraph>
          <FooterLinkParagraph>Live Chat</FooterLinkParagraph>
          <FooterLinkParagraph>Unlimited Support</FooterLinkParagraph>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLinkHeader>Resources</FooterLinkHeader>
          <FooterLinkParagraph>IOS & Android</FooterLinkParagraph>
          <FooterLinkParagraph>Watch a Demo</FooterLinkParagraph>
          <FooterLinkParagraph>Customers</FooterLinkParagraph>
          <FooterLinkParagraph>API</FooterLinkParagraph>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLinkHeader>Get In Touch</FooterLinkHeader>
          <FooterImageContainer>
            <img src={phone} alt="Phone" />
            <FooterLinkParagraph2>(480) 555-0103</FooterLinkParagraph2>
          </FooterImageContainer>
          <FooterImageContainer>
            <img src={location} alt="Location" />
            <FooterLinkParagraph2>
              4517 Washington Ave. Manchester, Kentucky 39495
            </FooterLinkParagraph2>
          </FooterImageContainer>
          <FooterImageContainer>
            <img src={mail} alt="Mail" />
            <FooterLinkParagraph2>debra.holt@example.com</FooterLinkParagraph2>
          </FooterImageContainer>
        </FooterLinkItem>
      </FooterLinks>
      <FooterBottom>
        <Rights>Made With Love By Figmaland All Right Reserved </Rights>
        <Logos>
          <img src={fb} alt="FaceBook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </Logos>
      </FooterBottom>
    </FooterSection>
  );
};
