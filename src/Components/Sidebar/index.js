import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarItems,
  SidebarItemLink,
} from "./SidebarStyledElements";

import Slide from "@material-ui/core/Slide";
import { animateScroll as scroll } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  const goToHome = () => {
    toggle();
    scroll.scrollToTop();
  };

  return (
    <Slide direction="left" in={isOpen} timeout={1000}>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon isOpen={isOpen} />
        </Icon>

        <SidebarWrapper>
          <SidebarItems>
            <SidebarItemLink
              to="/"
              onClick={goToHome}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-60}
              activeClass="active"
            >
              <span>Home</span>
            </SidebarItemLink>

            <SidebarItemLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-60}
              activeClass="active"
            >
              <span>About</span>
            </SidebarItemLink>
            <SidebarItemLink
              to="background"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-60}
              activeClass="active"
            >
              <span>Background</span>
            </SidebarItemLink>
            <SidebarItemLink
              to="projects"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-60}
              activeClass="active"
            >
              <span>Projects</span>
            </SidebarItemLink>
            <SidebarItemLink
              to="contact"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-60}
              activeClass="active"
            >
              <span>Contact</span>
            </SidebarItemLink>
          </SidebarItems>
        </SidebarWrapper>
      </SidebarContainer>
    </Slide>
  );
};

export default Sidebar;
