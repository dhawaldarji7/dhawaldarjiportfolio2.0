import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 10px;
  height: 180px;
  width: 100%;
  color: #888888;
  user-select: none;
`;

export const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
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
    color: aquamarine;
    transition: 0.3s all ease-in;
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
  margin-top: 5px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0);

  &:hover {
    color: rgba(250, 100, 100, 1);
    transition: 0.8s all ease-in;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  margin-right: 3px;
`;
