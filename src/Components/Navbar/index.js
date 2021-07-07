import React, { useState, useEffect } from "react";

import { Nav, NavContainer, NavLogo } from "./NavbarStyledElements";
import {
  NavMobile,
  NavItems,
  NavItem,
  NavItemLink,
  BurgerMenu,
} from "./NavbarStyledElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [NavScroll, setNavScroll] = useState(false);

  const navBgChange = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBgChange);
  }, []);

  const goToHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav NavScroll={NavScroll}>
        <NavContainer>
          <NavLogo
            to="/"
            onClick={goToHome}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-60}
            activeClass="active"
          >
            Dhawal Darji
          </NavLogo>

          <NavItems>
            <NavItem>
              <NavItemLink
                to="about"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-60}
                activeClass="active"
              >
                About
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="background"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-60}
                activeClass="active"
              >
                Background
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="projects"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-60}
                activeClass="active"
              >
                Projects
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="contact"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-60}
                activeClass="active"
              >
                Contact
              </NavItemLink>
            </NavItem>
          </NavItems>

          <NavMobile onClick={toggle}>
            <BurgerMenu />
          </NavMobile>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
