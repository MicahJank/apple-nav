import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/ipad-header4.png';


const HeaderContainer = styled.div`
    background-color: ##FFFFFF;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    position: relative;
`;

const Header4 = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='ipad header 4'></MainHeader>
            </HeaderContainer>

    );
};

export default Header4;