import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  Copyright,
  SocialIcons,
  SocialIcon,
  SocialIconLink,
  Message,
  EasterEgg,
  ArrowUp,
  FooterWrapper,
  ScrollUp,
} from "./FooterStyledElements";

import { GoHeart } from "react-icons/go";
import { GrReactjs } from "react-icons/gr";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const goToHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <ScrollUp>
          <ArrowUp
            onClick={goToHome}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-60}
            activeClass="active"
          />
        </ScrollUp>

        <FooterWrapper>
          <SocialIcons>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/dhawald7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcon>

            <SocialIcon>
              <SocialIconLink
                href="https://www.instagram.com/dhawald7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcon>

            <SocialIcon>
              <SocialIconLink
                href="https://www.linkedin.com/in/dhawaldarji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>

            <SocialIcon>
              <SocialIconLink
                href="https://www.github.com/dhawaldarji7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcon>
          </SocialIcons>

          <Copyright>©️ All rights reserved</Copyright>
          <Copyright>
            <Message>Made with</Message>
            <GrReactjs style={{ fontSize: 18 }} />
            <Message></Message>
            <Message>by Dhawal</Message>
          </Copyright>
          <EasterEgg>
            <Message>You're awesome! Believe in yourself!</Message>
            <GoHeart />
          </EasterEgg>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
