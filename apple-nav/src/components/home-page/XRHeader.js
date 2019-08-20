import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import XrHeader from './imgs/XR-Header.png';


const HeaderContainer = styled.div`
    background-color: #FAFAFA;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`;

const MainHeader = styled.img`
    width: 850px;
    height: 688px;
    object-fit: cover;
    
`;

const XRHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={XrHeader} alt='main xr header'></MainHeader>
            </HeaderContainer>

    );
};

export default XRHeader;