import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import XsHeader from './imgs/XS-Header.png';


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

const XSHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={XsHeader} alt='main xs header'></MainHeader>
            </HeaderContainer>

    );
};

export default XSHeader;