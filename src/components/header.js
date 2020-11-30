import React from 'react';
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import Button from "./Button";

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
      <NavMenu>
        {menuItems.map(menuItem => (
          <NavLink key={menuItem.title} to={menuItem.link}>{menuItem.title}</NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button round primary to="/trips">Book a Flight</Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cussor: pointer;
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;