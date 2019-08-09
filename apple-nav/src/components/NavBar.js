import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled.div`
    color: #FAFAFA;
    font-size: 1rem;
    padding: 14px;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #323232;
`;

const NavBar = () => {


    return (
        <NavContainer>
             <NavLink> <StyledLink>Mac</StyledLink> </NavLink>
             <NavLink> <StyledLink>Mac</StyledLink> </NavLink>
             <NavLink> <StyledLink>iPad</StyledLink> </NavLink>
             <NavLink> <StyledLink>iPhone</StyledLink> </NavLink>
             <NavLink> <StyledLink>Watch</StyledLink> </NavLink>
             <NavLink> <StyledLink>TV</StyledLink> </NavLink>
             <NavLink> <StyledLink>Music</StyledLink> </NavLink>
             <NavLink> <StyledLink>Support</StyledLink> </NavLink>
             <NavLink> <StyledLink>Mac</StyledLink> </NavLink>
             <NavLink> <StyledLink>Mac</StyledLink> </NavLink>
        </NavContainer>
       
  
    );
};

export default NavBar;