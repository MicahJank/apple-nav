import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/buy-mac-header.png';


const HeaderContainer = styled.div`
    background-color: #FAFAFA;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    width: 1250px;
    height: 800px;
    object-fit: cover;   
`;

const BuyMacHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='macbook air header'></MainHeader>
            </HeaderContainer>

    );
};

export default BuyMacHeader;