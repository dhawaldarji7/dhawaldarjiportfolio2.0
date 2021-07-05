import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 1);
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: auto;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 60px;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  cursor: pointer;
  color: skyblue;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: -1vw;

  &:hover {
    color: aqua;
  }
`;

export const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: skyblue;
  }

  &:hover {
    color: aqua;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-self: center;
  align-items: center;
  list-style: none;
  text-align: center;
  color: white;
  margin-right: 21vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavItemLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: coral;
    border-bottom: 3px solid coral;
  }

  &:hover {
    transform: scale(1.1);
    color: coral;
    transition: 0.2s all ease-in-out;
  }
`;
