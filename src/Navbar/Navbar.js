import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
          </NavLink>
          <NavLink
            activeClass="active"
            to="profile"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Profile
          </NavLink>
          <NavLink
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Skills
          </NavLink>
          <NavLink
            activeClass="active"
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Experience
          </NavLink>
          <NavLink
            activeClass="active"
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Education
          </NavLink>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 20px 40px;
  gap: 48px;
  max-width: 1100px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${COLORS.secondary};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.medium};
  cursor: pointer;

  &:hover {
    /* text-decoration: revert; */
    font-weight: ${WEIGHTS.bold};
  }

  /* &.active {
    border-bottom: 3px solid black;
  } */
`;

export default Navbar;
