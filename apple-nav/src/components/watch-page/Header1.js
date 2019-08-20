import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/header1.png';


const HeaderContainer = styled.div`
    background-color: #FAFAFA;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    position: relative;
`;

const Header1 = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='watch header 1'></MainHeader>
            </HeaderContainer>

    );
};

export default Header1;