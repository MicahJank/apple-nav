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

const NavBackground = styled.div`
  width: 100%;
  background-color: ${props => props.NavColor === 'black' ? 'black' : props.NavColor === 'dark' ? '#1E1E1F' : '#323232'}
`;

const NavContainer = styled.div`
  width: 1015px;
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;

  a {
    color: #FAFAFA;
    transition: color 0.3s;
  }

  a.active {
    color: #B7B7B7;
  }
`;



const NavBar = (props) => {

  const NavColor = props.history.location.pathname === '/iphone' ? 'black' : props.history.location.pathname === '/tv' ? 'dark' : 'normal';

    return (
      <NavBackground NavColor={NavColor}>
        <NavContainer className='nav-container'>
             <NavLink exact to={'/'}> <StyledLink content={'apple-icon'}/> </NavLink>
             <NavLink to={'/mac'}> <StyledLink content={'mac'}/></NavLink>
             <NavLink to={'/ipad'}> <StyledLink content={'ipad'}/></NavLink>
             <NavLink to={'/iphone'}> <StyledLink content={'iphone'}/></NavLink>
             <NavLink to={'/watch'}> <StyledLink content={'watch'}/></NavLink>
             <NavLink to={'/tv'}> <StyledLink content={'tv'}/></NavLink>
             <NavLink to={'/music'}> <StyledLink content={'music'}/></NavLink>
             <NavLink to={'/support'}> <StyledLink content={'support'}/></NavLink>
             <NavLink to={'/search'}> <StyledLink content={'search-icon'}/></NavLink>
             <NavLink to={'/shop'}> <StyledLink content={'bag-icon'}/></NavLink>     
        </NavContainer>
      </NavBackground>
       
  
    );
};

export default NavBar;