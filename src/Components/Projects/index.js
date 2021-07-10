import React from "react";
import {
  ProjectsContainer,
  Project,
  ProjectsWrapper,
  Heading,
  projectTitle,
  projectDomain,
  projectDescription,
} from "./ProjectsStyledElements";
import Carousel from "react-elastic-carousel";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <Heading>Few of my projects!</Heading>
        <Carousel breakPoints={breakPoints}>
          <Project>
            <projectTitle>Hello</projectTitle>
            <projectDomain>Hiii</projectDomain>
            <projectDescription>skjfsj</projectDescription>
          </Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </Carousel>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
