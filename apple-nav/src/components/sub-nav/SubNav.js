import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Mac from './items/Mac.js';
import Ipad from './items/Ipad.js';
import Iphone from './items/Iphone.js';
import Music from './items/Music.js';
import TV from './items/TV.js';
import Watch from './items/Watch.js';

const SubNavContainer = styled.div`
    background-color: ${props => props.color === 'dark' ? '#141414' : props.color === 'light' ? '#fff' : '#F7F7F7'};
    padding: 10px;
    height: 120px;
`;

const SubNav = (props) => {

    // this switch statement is used in place of multiple if/else conditions. Basically it checks the url by grabbing the history from props. After that
    // it returns a different component based on what url the user is currently at.
    const SubNavItems = () => {
        switch(props.history.location.pathname) {
            case '/mac':
                return (<Mac />);

            case '/ipad':
                return (<Ipad />);

            case '/iphone':
                return (<Iphone />);

            case '/watch':
                return (<Watch />);

            case '/tv':
                return (<TV />);

            case '/music':
                return (<Music />);

            default:
                 return (<p>Never gonna give you up! Never gonna let you down!</p>) // User should not be able to get here.
        }
    };

    const SubNavColor = props.history.location.pathname === '/tv' ? 'dark' : props.history.location.pathname === '/watch' ? 'light' : 'normal';

    return(
        <SubNavContainer color={SubNavColor}>
            {SubNavItems()}
        </SubNavContainer>
    );
};

export default SubNav;