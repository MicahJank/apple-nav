import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

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

// GSAP animation funtion - will be called inside the SubNavItems because i want it to run everytime the SubNavItems is called. "component" is the item i want to animate
const Animation = (component) => (
    <Tween from={{x: '100px'} } duration={2}>
        {component}
    </Tween>
);

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