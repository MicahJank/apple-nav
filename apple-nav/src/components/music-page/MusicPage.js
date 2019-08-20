import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import Header1 from './Header1.js';
import Header2 from './Header2.js';
import Header3 from './Header3.js';

const MainHeader = styled.div`
    overflow: hidden;
`;

const MusicPage = () => {
  return (
    <MainHeader>
        <Tween from={{ y: '50px', opacity: 0 }} duration={1.5}> 
            <div>
                <Header1 />
                <Header2 />
                <Header3 />
            </div>
        </Tween> 
    </MainHeader>
   
  );
};

export default MusicPage;