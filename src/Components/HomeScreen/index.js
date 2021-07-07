import React from "react";
import video from "../../media/bg1.mp4";
import TypeWriter from "react-typewriter";

import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {
  HomeScreenContainer,
  HomeScreenBg,
  VideoBg,
  HomeScreenContent,
  MainText,
  SecondaryText,
  Description,
  SocialIcons,
  SocialIcon,
  SocialIconLink,
} from "./HomeScreenStyledElements";

const HomeScreen = () => {
  return (
    <HomeScreenContainer id="home">
      <HomeScreenBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HomeScreenBg>

      <HomeScreenContent>
        <MainText>
          I'm{" "}
          <TypeWriter typing={1} minDelay={100}>
            Dhawal Darji
          </TypeWriter>
        </MainText>
        <SecondaryText>
          I'm a{" "}
          <TypeWriter typing={1} minDelay={100}>
            FullStack Developer
          </TypeWriter>
        </SecondaryText>

        <Description>Based in Dover, NH</Description>
        <Description>I code, sing, play guitar and consume chai!☕</Description>

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
      </HomeScreenContent>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
