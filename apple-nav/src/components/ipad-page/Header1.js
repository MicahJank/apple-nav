import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/ipad-header1.png';


const HeaderContainer = styled.div`
    background-color: ##FFFFFF;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    position: relative;
    top: 10px;
    right: 10px;
      
`;

const Header1 = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='ipad header 1'></MainHeader>
            </HeaderContainer>

    );
};

export default Header1;