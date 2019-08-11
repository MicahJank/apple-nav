import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import XrHeader from './XRHeader.js';
import XsHeader from './XSHeader.js';

const MainHeader = styled.div`
    margin-bottom: 10px;
`; 

const HomePage = () => {
  return (
    <Tween from={{ x: '200px', opacity: 0 }} duration={0.5}> 
        <MainHeader>
            <XrHeader />
        </MainHeader>
        <MainHeader>
            <XsHeader />
        </MainHeader>
    </Tween> 
   
  );
};

export default HomePage;
