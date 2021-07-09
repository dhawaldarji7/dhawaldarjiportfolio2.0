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
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  background-color: rgba(200, 200, 200, 0.2);
  border-radius: 15px;
  top: 25vh;
  padding: 20px 10px 20px 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const MainText = styled.h1`
  color: white;
  font-size: 56px;
  text-align: center;

  @media screen and (max-width: 512px) {
    font-size: 32px;
  }
`;

export const SecondaryText = styled.h4`
  color: white;
  font-size: 25px;
  font-weight: 350;
  margin-bottom: 7px;

  @media screen and (max-width: 512px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: rgba(256, 256, 256, 0.7);
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;

  @media screen and (max-width: 512px) {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
  margin-top: 5px;
`;

export const SocialIcon = styled.li`
  border: none;
  background: none;
  font-size: 1.8rem;
  display: block;
  list-style: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;

export const SocialIconLink = styled.a`
  text-decoration: none;

  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: white;
  }
  &:hover {
    color: skyblue;
    transition: 0.1s all ease-in;
  }
`;
