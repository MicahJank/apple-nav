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
    background-color: #F7F7F7;
    padding: 10px;
`;

const SubNav = (props) => {

    //TODO - Depending on which navlink is clicked in the navbar a different subcomponent should pop up with different icons that represent the sub component.

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
                 return (<p>WHOOPSIE!</p>)
        }
    };

    return(
        <SubNavContainer>
            {SubNavItems()}
        </SubNavContainer>
    );
};

export default SubNav;