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
  width: 85%;
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
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
  }
`;

export const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  .rec.rec-arrow {
    border: 2px solid black;
    background-color: #8fa6cb;
    color: black;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-arrow:hover,
  .rec.rec-arrow:focus,
  .rec.rec-arrow:active {
    color: #fff;
    background-color: #8fa6cb;
    border-color: #fff;
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 3px rgba(256, 256, 256, 0.7);
  }

  .rec.rec-dot:hover,
  .rec.rec-dot:focus {
    box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.7);
  }

  .rec.rec-dot.rec-dot_active {
    background: black;
  }
`;

export const Heading = styled(H)`
  margin-bottom: 30px;
`;

export const ProjectTitle = styled.h1`
  position: absolute;
  top: 28px;
  text-align: center;
  font-size: 30px;
  color: black;
`;

export const ProjectDomain = styled.span`
  position: absolute;
  top: 20%;
  font-size: 16px;
`;

export const ProjectDescription = styled.p`
  text-align: center;
  font-size: 20px;
  width: 70%;

  @media screen and (max-width: 640px) {
    font-size: 18px;
    width: 80%;
  }
`;
