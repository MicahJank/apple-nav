import React from 'react';

import { NavLink } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const StyledLink = styled.div`
    color: #FAFAFA;
    font-size: 1rem;
    padding: 12px 22px;
    transition: color 0.3s;
    
    :hover {
        color: #B7B7B7;
        transition: color 0.3s;
    }
`;



const Icon = styled.span`
    font-size: 1.3rem;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #323232;
`;

const NavBar = () => {


    return (
        <NavContainer>
             <NavLink> <StyledLink> <Icon><FontAwesomeIcon icon={faApple} /> </Icon></StyledLink> </NavLink>
             <NavLink> <StyledLink>Mac</StyledLink> </NavLink>
             <NavLink> <StyledLink>iPad</StyledLink> </NavLink>
             <NavLink> <StyledLink>iPhone</StyledLink> </NavLink>
             <NavLink> <StyledLink>Watch</StyledLink> </NavLink>
             <NavLink> <StyledLink>TV</StyledLink> </NavLink>
             <NavLink> <StyledLink>Music</StyledLink> </NavLink>
             <NavLink> <StyledLink>Support</StyledLink> </NavLink>
             <NavLink> <StyledLink><Icon><FontAwesomeIcon icon={faSearch} /></Icon></StyledLink> </NavLink>
             <NavLink> <StyledLink><Icon><FontAwesomeIcon icon={faShoppingBag} /></Icon></StyledLink> </NavLink>
        </NavContainer>
       
  
    );
};

export default NavBar;