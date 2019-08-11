import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import AirHeader from './AirHeader.js';
import ProHeader from './ProHeader.js';
import BuyMacHeader from './BuyMacHeader.js';

const MainHeader = styled.div`
    overflow: hidden;
`;

const HomePage = () => {
  return (
    <MainHeader>
        <Tween from={{ x: '200px', opacity: 0 }} duration={0.5}> 
            <div>
                <AirHeader />
                <ProHeader />
                <BuyMacHeader />
            </div>
        </Tween> 
    </MainHeader>
   
  );
};

export default HomePage;