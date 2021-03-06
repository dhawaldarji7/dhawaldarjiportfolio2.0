import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: ${({ NavScroll }) => (NavScroll ? "black" : "transparent")};
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  font-size: 1rem;
  z-index: 10;
  user-select: none;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;

  z-index: 1;
  width: 100%;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkS)`
  color: black;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: -1vw;

  &:hover {
    color: antiquewhite;
    transform: scale(1.05);
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
    color: white;
  }
`;

export const BurgerMenu = styled(FaBars)`
  &:hover {
    color: antiquewhite;
    transform: scale(1.05);
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
  height: 50px;
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
    transform: scale(1.05);
    color: coral;
  }
`;
