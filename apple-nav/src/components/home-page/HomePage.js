import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import XrHeader from './XRHeader.js';

const HomePage = () => {
  return (
    <Tween from={{ x: '200px', opacity: 0 }} duration={0.5}> 
        <div>
         <XrHeader />
        </div>
    </Tween> 
   
  );
};

export default HomePage;
