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
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarItems>
          <SidebarItemLink to="about">About</SidebarItemLink>
          <SidebarItemLink to="background">Background</SidebarItemLink>
          <SidebarItemLink to="projects">Projects</SidebarItemLink>
          <SidebarItemLink to="contact">Contact</SidebarItemLink>
        </SidebarItems>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
