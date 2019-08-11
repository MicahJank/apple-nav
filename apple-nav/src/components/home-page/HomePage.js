import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

// import sections of home page here
import XrHeader from './imgs/XR-Header.png'; // TODO - change this into a sub component and then add more for the different sections


const HomePage = () => {

    return (
        <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
            <img src={XrHeader} alt='iphone homepage xr header' /> 
        </Tween>
        
    );
};

export default HomePage;