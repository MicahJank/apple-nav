import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import Header1 from './Header1.js';
import Header2 from './Header2.js';

const MainHeader = styled.div`
    overflow: hidden;
`;

const WatchPage = () => {
  return (
    <MainHeader>
        <Tween from={{ x: '200px', opacity: 0 }} duration={0.5}> 
            <div>
                <Header1 />
                <Header2 />
            </div>
        </Tween> 
    </MainHeader>
   
  );
};

export default WatchPage;