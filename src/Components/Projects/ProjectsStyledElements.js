import styled from "styled-components";
import { Heading as H } from "../Background/BackgroundStyledElements";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  background: #8fa6cb;
  user-select: none;
  width: 100%;
  margin-top: -10px;
  align-items: center;
  padding-top: 50px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    width: 98%;
  }
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: white;
  margin: 15px;
  border-radius: 15px;
`;

export const Heading = styled(H)`
  margin-bottom: 30px;
`;

export const projectTitle = styled.h1`
  font-size: 18px;
  color: black;
`;

export const projectDomain = styled.span`
  font-size: 18px;
`;

export const projectDescription = styled.span`
  font-size: 18px;
`;
