import React from "react";
import {
  BackgroundContainer,
  BackgroundContent,
  Section,
  Heading,
  Text,
  Item,
  ItemWrapper,
  SecondaryText,
  Sub,
  Subtext,
  Title,
} from "./BackgroundStyledElements";

const Background = () => {
  return (
    <>
      <BackgroundContainer id="background">
        <BackgroundContent>
          <Heading>Background</Heading>
          <Section>
            <Title>
              <Text>Education</Text>
            </Title>
            <ItemWrapper>
              <Item>
                <Text>University of New Hampshire</Text>
                <SecondaryText>
                  Master of Science - Computer Science
                </SecondaryText>

                <Sub>
                  <Subtext>May'2021</Subtext>
                  <Subtext>GPA: 3.81</Subtext>
                </Sub>
              </Item>

              <Item>
                <Text>Savitribai Phule Pune University</Text>
                <SecondaryText>
                  Bachelor of Engineering - Information Technology
                </SecondaryText>
                <Sub>
                  <Subtext>June'2018</Subtext>
                  <Subtext>GPA: 3.75</Subtext>
                </Sub>
              </Item>
            </ItemWrapper>
          </Section>

          <Section>
            <Title>
              <Text>Experience</Text>
            </Title>
            <ItemWrapper>
              <Item>
                <Text>Cigna Digital</Text>
                <SecondaryText>Java Full Stack Developer</SecondaryText>
                <Sub>
                  <Subtext>January'2021 - June'2021</Subtext>
                </Sub>
              </Item>

              <Item>
                <Text>Zensar Technologies</Text>
                <SecondaryText>Java Full Stack Developer</SecondaryText>
                <Sub>
                  <Subtext>January'2017 - July'2019</Subtext>
                </Sub>
              </Item>
            </ItemWrapper>
          </Section>

          <Section>
            <Title>
              <Text>Skills</Text>
            </Title>
            <ItemWrapper>
              <Item>
                <Subtext>Languages</Subtext>
                <Text>Python, Java, C++, C, JavaScript</Text>
              </Item>

              <Item>
                <Subtext>Web Development</Subtext>
                <Text>ReactJS, HTML/CSS, Bootstrap, AJAX, jQuery</Text>
              </Item>

              <Item>
                <Subtext>Frameworks</Subtext>
                <Text>
                  Spring, Spring Boot, Spring MVC, Spring Microservices,
                  Hibernate
                </Text>
              </Item>

              <Item>
                <Subtext>Libraries</Subtext>
                <Text>
                  Pytorch, NumPy, Pandas, Transformers, Scikit-learn, Lucene
                </Text>
              </Item>

              <Item>
                <Subtext>Databases & Web Services</Subtext>
                <Text>MySQL, MongoDB, Restful, Soap</Text>
              </Item>

              <Item>
                <Subtext>Developer Tools & IDEs</Subtext>
                <Text>
                  Git, Jenkins, Maven, JIRA, IntelliJ, PyCharm, VS Code, Eclipse
                </Text>
              </Item>
            </ItemWrapper>
          </Section>
        </BackgroundContent>
      </BackgroundContainer>
    </>
  );
};

export default Background;
