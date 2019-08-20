import React, { useState, useEffect } from 'react';

import { Route, NavLink } from 'react-router-dom';

import StyledLink from './StyledLink.js';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './SearchBar.js';


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

  @media(max-width: 1070px) {
    width: 100%;
    
}

  a {
    color: #FAFAFA;
    transition: color 0.3s;
  }

  a.active {
    color: #B7B7B7;
  }
`;

const Item = styled.div`
  display: flex
`;



const NavBar = (props) => {

  const [searching, setSearching] = useState(false);

  const NavColor = props.history.location.pathname === '/iphone' ? 'black' : props.history.location.pathname === '/tv' ? 'dark' : 'normal';
 
  const AnimateItem = (element) => (
    <Tween to={{ scale: 0 }} duration={0.5}>
        {element}
    </Tween>
  );

  const ClickSearch = () => {
    setSearching(true);
    console.log('WORKING');
  };

  const Nav = () => {
    if (!searching) {
      return (
        <>
        <NavLink exact to={'/'}> <StyledLink content={'apple-icon'}/> </NavLink>
        <NavLink to={'/mac'}> <StyledLink content={'mac'}/></NavLink>
        <NavLink to={'/ipad'}> <StyledLink content={'ipad'}/></NavLink>
        <NavLink to={'/iphone'}> <StyledLink content={'iphone'}/></NavLink>
        <NavLink to={'/watch'}> <StyledLink content={'watch'}/></NavLink>
        <NavLink to={'/tv'}> <StyledLink content={'tv'}/></NavLink>
        <NavLink to={'/music'}> <StyledLink content={'music'}/></NavLink>
        <NavLink to={'/support'}> <StyledLink content={'support'}/></NavLink>
        <StyledLink clickFunction={ClickSearch} content={'search-icon'}/>
        <StyledLink content={'bag-icon'}/>
        </>
      );
    } else {
      return (
        <>
        <NavLink exact to={'/'}> <StyledLink content={'apple-icon'}/> </NavLink>
        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/mac'}> <StyledLink content={'mac'}/></NavLink>
         </div>
        </Tween>
        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
          <div> 
            <NavLink to={'/ipad'}> <StyledLink content={'ipad'}/></NavLink>
          </div>
        </Tween>

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/iphone'}> <StyledLink content={'iphone'}/></NavLink>
         </div>
        </Tween>

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/watch'}> <StyledLink content={'watch'}/></NavLink>
         </div>
        </Tween> 

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/tv'}> <StyledLink content={'tv'}/></NavLink>
         </div>
        </Tween>

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/music'}> <StyledLink content={'music'}/></NavLink>
         </div>
        </Tween>

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <NavLink to={'/support'}> <StyledLink content={'support'}/></NavLink>
         </div>
        </Tween>

        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <StyledLink content={'search-icon'}/>
         </div>
        </Tween>
        <Tween to={{ scale: '0.5', opacity: 0 }} duration={0.5}>
         <div> 
          <StyledLink content={'bag-icon'}/>
         </div>
        </Tween>
        </>
      );
    }
  };


    return (
      
      <NavBackground NavColor={NavColor}>
         <NavContainer className='nav-container'>
           {Nav()}
         </NavContainer>
      </NavBackground>
    );
};

export default NavBar;