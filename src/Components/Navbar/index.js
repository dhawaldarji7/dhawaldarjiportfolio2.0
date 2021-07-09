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

  const offset = -60;
  const duration = 700;

  return (
    <>
      <Nav NavScroll={NavScroll}>
        <NavContainer>
          <NavLogo
            to="/"
            onClick={goToHome}
            smooth="easeOutQuad"
            duration={duration}
            spy={true}
            exact="true"
            offset={offset}
          >
            Dhawal Darji
          </NavLogo>
          <NavItems>
            <NavItem>
              <NavItemLink
                to="about"
                smooth={true}
                duration={duration}
                spy={true}
                exact="true"
                offset={offset}
              >
                About
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="background"
                smooth={true}
                duration={duration}
                spy={true}
                exact="true"
                offset={offset}
              >
                Background
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="projects"
                smooth={true}
                duration={duration}
                spy={true}
                exact="true"
                offset={offset}
              >
                Projects
              </NavItemLink>
            </NavItem>

            <NavItem>
              <NavItemLink
                to="contact"
                smooth={true}
                duration={duration}
                spy={true}
                exact="true"
                offset={offset}
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
