import React from "react";
import {
  ProjectsContainer,
  Project,
  ProjectsWrapper,
  Heading,
  ProjectTitle,
  ProjectDomain,
  ProjectDescription,
  ProjectCarousel,
} from "./ProjectsStyledElements";
import Carousel from "react-elastic-carousel";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 3, itemsToScroll: 3 },
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <Heading>Few of my projects!</Heading>
        <ProjectCarousel>
          <Carousel breakPoints={breakPoints}>
            <Project id="0">
              <ProjectTitle>Hello</ProjectTitle>
              <ProjectDomain>Hiii</ProjectDomain>
              <ProjectDescription>
                skjfsjsd vnsfbsfj sdjfsbf skjdbs kdjfbd
              </ProjectDescription>
            </Project>
            <Project id="1">A</Project>
            <Project id="2">B</Project>
            <Project id="3">C</Project>
            <Project id="4">D</Project>
            <Project id="5">E</Project>
            <Project id="6">F</Project>
          </Carousel>
        </ProjectCarousel>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
