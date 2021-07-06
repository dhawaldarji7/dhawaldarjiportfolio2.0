import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const SidebarIconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
 `;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 75%;
  height: 65%;
  background: rgba(0, 0, 0, 0.9);
  display: grid;
  align-items: center;
  left: 25%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "60%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  border-radius: 5%;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;

  &:hover {
    color: antiquewhite;
  }

  animation: ${({ isOpen }) => (isOpen ? SidebarIconAnimation : "none")};
  animation-duration: 0.5s;
  animation-delay: 0.6s;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1.7rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  } ;
`;

export const SidebarItemLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    color: antiquewhite;
    transform: scale(1.1);
    transition: 0.3s all ease-in-out;
  }
`;
