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

const HomeScreen = ({ data }) => {
  if (data) {
    var name = data.name;
    var role = data.role;
    var location = data.location;
    var description = data.desc;
  }

  return (
    <HomeScreenContainer id="home">
      <HomeScreenBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HomeScreenBg>

      <HomeScreenContent>
        <MainText>
          <TypeWriter typing={1} minDelay={100}>
            {name ? `I'm ${name}` : null}
          </TypeWriter>
        </MainText>
        <SecondaryText>
          <TypeWriter typing={1} minDelay={100}>
            {role ? `I'm a ${role}` : null}
          </TypeWriter>
        </SecondaryText>

        <Description>{location ? `Based in ${location}` : null}</Description>
        <Description>{description ? `${description}` : null}</Description>

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
