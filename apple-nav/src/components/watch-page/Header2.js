import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/header2.png';


const HeaderContainer = styled.div`
    background-color: #FFF;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    position: relative;
`;

const Header2 = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='iphone header 2'></MainHeader>
            </HeaderContainer>

    );
};

export default Header2;