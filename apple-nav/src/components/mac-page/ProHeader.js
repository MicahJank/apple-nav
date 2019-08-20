import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import Header from './imgs/macbook-pro-header.png';


const HeaderContainer = styled.div`
    background-color: #121217;
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

const ProHeader = () => {

    return (
            <HeaderContainer>
                <MainHeader src={Header} alt='macbook air header'></MainHeader>
            </HeaderContainer>

    );
};

export default ProHeader;