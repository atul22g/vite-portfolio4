import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="logo" className="logo" /> */}
        <span className="logo">Portfolio4</span>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  .logo {
    height: auto;
    max-width: 30%;
    font-size: 4rem;
    font-style: oblique;
    font: optional;
    font-family: Georgia, 'Times New Roman', Times, serif
  }
`;

export default Header;
