import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

const Animation = (component) => (
    <Tween from={{x: '100px'} } duration={2}>
        {component}
    </Tween>
);

const MyDiv = styled.div`

`;

const Ipad = (props) => {

    return (
    <Tween from={{x: '100px'} } duration={2}>
        <MyDiv>Hello</MyDiv>    
    </Tween>
    )
};

export default Ipad;