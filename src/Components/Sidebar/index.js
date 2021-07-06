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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Slide direction="left" in={isOpen} timeout={1000}>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon isOpen={isOpen} />
        </Icon>

        <SidebarWrapper>
          <SidebarItems>
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
            <SidebarItemLink to="background">
              <span> Background</span>
            </SidebarItemLink>
            <SidebarItemLink to="projects">
              <span>Projects</span>
            </SidebarItemLink>
            <SidebarItemLink to="contact">
              <span>Contact</span>
            </SidebarItemLink>
          </SidebarItems>
        </SidebarWrapper>
      </SidebarContainer>
    </Slide>
  );
};

export default Sidebar;
