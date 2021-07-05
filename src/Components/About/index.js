import React from "react";
import {
  AboutContainer,
  AboutImage,
  AboutContent,
  Heading,
  Bio,
  DownloadIcon,
  DownloadButton,
} from "./AboutStyledElemenets";
import profilepic from "../../media/profilepic.jpg";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutImage src={profilepic} />

        <AboutContent>
          <Heading>About me</Heading>
          <Bio>
            My name is Dhawal Darji and I come from India. I graduated with a
            Master's degree in Computer Science from the University of New
            Hampshire and hold a Bachelor's degree in Information Technology
            bestowed by the Savitribai Phule Pune University. I'm a Full Stack
            Developer with around 3 years of experience. Apart from this I love
            playing guitar, singing and writing poems.
          </Bio>

          <DownloadButton>
            <DownloadIcon />
            Resume
          </DownloadButton>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
