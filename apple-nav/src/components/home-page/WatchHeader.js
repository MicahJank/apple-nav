import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/watch-header.png';


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

const WatchHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='main watch header'></MainHeader>
            </HeaderContainer>
    );
};

export default WatchHeader;