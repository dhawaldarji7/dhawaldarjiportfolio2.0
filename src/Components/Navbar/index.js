import React from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavContainer, NavLogo } from "./NavbarStyledElements";
import {
  NavMobile,
  NavItems,
  NavItem,
  NavItemLink,
} from "./NavbarStyledElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Dhawal Darji</NavLogo>
          <NavItems>
            <NavItem>
              <NavItemLink to="about">About</NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink to="background">Background</NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink to="projects">Projects</NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink to="contact">Contact</NavItemLink>
            </NavItem>
          </NavItems>

          <NavMobile onClick={toggle}>
            <FaBars />
          </NavMobile>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
