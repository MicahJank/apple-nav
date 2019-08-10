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
             <NavLink exact to={'/'}> <StyledLink content={'apple-icon'}/> </NavLink>
             <NavLink exact to={'/mac'}> <StyledLink content={'mac'}/></NavLink>
             <NavLink to={'/ipad'}> <StyledLink content={'ipad'}/></NavLink>
             <NavLink to={'/iphone'}> <StyledLink content={'iphone'}/></NavLink>
             <NavLink to={'/watch'}> <StyledLink content={'watch'}/></NavLink>
             <NavLink to={'/tv'}> <StyledLink content={'tv'}/></NavLink>
             <NavLink to={'/music'}> <StyledLink content={'music'}/></NavLink>
             <NavLink to={'/support'}> <StyledLink content={'support'}/></NavLink>
             <NavLink to={'/search'}> <StyledLink content={'search-icon'}/></NavLink>
             <NavLink to={'/shop'}> <StyledLink content={'bag-icon'}/></NavLink>     
        </NavContainer>
       
  
    );
};

export default NavBar;