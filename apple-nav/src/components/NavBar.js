import React from 'react';

import { NavLink } from 'react-router-dom';

import StyledLink from './StyledLink.js';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


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
             <NavLink> <StyledLink content={'apple-icon'}/> </NavLink>
             <NavLink> <StyledLink content={'mac'}/></NavLink>
             <NavLink> <StyledLink content={'ipad'}/></NavLink>
             <NavLink> <StyledLink content={'iphone'}/></NavLink>
             <NavLink> <StyledLink content={'watch'}/></NavLink>
             <NavLink> <StyledLink content={'tv'}/></NavLink>
             <NavLink> <StyledLink content={'music'}/></NavLink>
             <NavLink> <StyledLink content={'support'}/></NavLink>
             <NavLink> <StyledLink content={'search-icon'}/></NavLink>
             <NavLink> <StyledLink content={'bag-icon'}/></NavLink>
           
        </NavContainer>
       
  
    );
};

export default NavBar;