import styled from "styled-components";

export const HomeScreenContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HomeScreenBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeScreenContent = styled.div`
  margin-top: -100px;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const MainText = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`;

export const SecondaryText = styled.h4`
  color: white;
  font-size: 25px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
