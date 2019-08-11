import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import IpadPro from './item-imgs/ipad-imgs/ipad-pro.png';
import IpadAir from './item-imgs/ipad-imgs/ipad-air.png';
import Ipad from './item-imgs/ipad-imgs/ipad.png';
import IpadMini from './item-imgs/ipad-imgs/ipad-mini.png';
import Compare from './item-imgs/ipad-imgs/compare-ipad.png';
import Pencil from './item-imgs/ipad-imgs/pencil.png';
import Keyboard from './item-imgs/ipad-imgs/smart-keyboard.png';
import Accessories from './item-imgs/ipad-imgs/accessories-ipad.png';
import IOS from './item-imgs/ipad-imgs/ios.png';

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