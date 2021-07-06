import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarItems,
  SidebarItemLink,
} from "./SidebarStyledElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
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
            About
          </SidebarItemLink>
          <SidebarItemLink to="background">Background</SidebarItemLink>
          <SidebarItemLink to="projects">Projects</SidebarItemLink>
          <SidebarItemLink to="contact">Contact</SidebarItemLink>
        </SidebarItems>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
