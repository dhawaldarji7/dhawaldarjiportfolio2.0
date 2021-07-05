import styled from "styled-components";
import { HiDownload } from "react-icons/hi";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #7fa8af;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;
  width: 100%;
  height: max-content;
  margin: 0 auto;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 25%;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-top: -40px;
  }
`;

export const AboutContent = styled.div`
  color: black;
  margin-left: 20px;
  width: 100vmin;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const Heading = styled.h1`
  color: black;
  text-align: left;
  margin-bottom: 10px;
  font-size: 25px;
  width: fit-content;
  font-weight: 500;
  border-bottom: 2px solid;
`;

export const Bio = styled.p`
  color: black;
  text-align: left;
  margin-bottom: 10px;
  line-height: 22px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const DownloadIcon = styled(HiDownload)`
  font-size: 20px;
  background: none;
  margin-right: 5px;
`;

export const DownloadButton = styled.button`
  color: white;
  background: black;
  display: flex;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  width: fit-content;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  position: relative;

  &:hover {
    background: skyblue;
    transition: 0.3s all ease-in;
    transform: scale(1.03);
    color: black;
  }
`;
