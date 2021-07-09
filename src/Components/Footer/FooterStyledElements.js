import styled from "styled-components";
import { TiArrowUpThick as up } from "react-icons/ti";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
  height: fit-content;
  color: #888888;
  user-select: none;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
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
    color: #707070;
  }
  &:hover {
    color: #dbf4a7;
    transition: 0.1s all ease-in;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  align-items: center;
  margin-top: 5px;
  justify-content: center;
  display: flex;
`;

export const EasterEgg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0);
  width: 90vw;

  &:hover {
    color: rgba(250, 100, 100, 1);
    transition: 0.8s all ease-in;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  margin-right: 3px;
`;

export const ScrollUp = styled(Link)`
  color: black;
`;

export const ArrowUp = styled(up)`
  border: 1.5px solid black;
  border-radius: 100%;
  transform: scale(2.8);
  margin-top: -7px;
  padding: 1px 2px;
  background: #dbf4a7;

  &:hover {
    transform: scale(3);
    transition: 0.1s all ease-in-out;
    cursor: pointer;
  }
`;
