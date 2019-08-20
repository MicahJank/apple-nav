import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/macbook-air-header.png';


const HeaderContainer = styled.div`
    background-color: #FAFAFA;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;

const MainHeader = styled.img`
    object-fit: cover; 
    
    @media(max-width: 1070px) {
        width: 800px;
    }
`;

const AirHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='macbook air header'></MainHeader>
            </HeaderContainer>

    );
};

export default AirHeader;