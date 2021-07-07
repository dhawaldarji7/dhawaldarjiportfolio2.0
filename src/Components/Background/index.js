import React from "react";
import {
  BackgroundContainer,
  Education,
  Experience,
  Skills,
} from "./BackgroundStyledElements";

const Background = () => {
  return (
    <BackgroundContainer id="background">
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
    </BackgroundContainer>
  );
};

export default Background;
