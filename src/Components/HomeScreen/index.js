import React from "react";
import video from "../../media/bg1.mp4";
import TypeWriter from "react-typewriter";

import {
  HomeScreenContainer,
  HomeScreenBg,
  VideoBg,
  HomeScreenContent,
  MainText,
  SecondaryText,
} from "./HomeScreenStyledElements";

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
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
      </HomeScreenContent>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
