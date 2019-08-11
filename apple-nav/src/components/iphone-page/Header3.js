import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/header3.png';


const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    text-align: center;
`;

const MainHeader = styled.img`
    position: relative;
`;

const Header3 = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='iphone header 3'></MainHeader>
            </HeaderContainer>

    );
};

export default Header3;