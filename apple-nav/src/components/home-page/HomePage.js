import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import XrHeader from './XRHeader.js';
import XsHeader from './XSHeader.js';
import WatchHeader from './WatchHeader.js';

const MainHeader = styled.div`
    margin-bottom: 10px;
    overflow: hidden;
`;

const HomePage = () => {
  return (
    <MainHeader>
        <Tween from={{ x: '200px', opacity: 0 }} duration={0.5}> 
            <div>
                <XrHeader />
                <XsHeader />
                <WatchHeader />
            </div>
        </Tween> 
    </MainHeader>
   
  );
};

export default HomePage;
