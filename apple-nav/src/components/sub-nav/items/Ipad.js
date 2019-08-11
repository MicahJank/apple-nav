import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import IpadPro from './item-imgs/ipad-imgs/ipad-pro.svg';
import IpadAir from './item-imgs/ipad-imgs/ipad-air.svg';
import IpadNormal from './item-imgs/ipad-imgs/ipad.svg';
import IpadMini from './item-imgs/ipad-imgs/ipad-mini.svg';
import Compare from './item-imgs/ipad-imgs/compare-ipad.svg';
import Pencil from './item-imgs/ipad-imgs/pencil.svg';
import Keyboard from './item-imgs/ipad-imgs/smart-keyboard.svg';
import Accessories from './item-imgs/ipad-imgs/accessories-ipad.svg';
import IOS from './item-imgs/ipad-imgs/ios.svg';

const Animation = (component) => (
    <Tween from={{x: '100px'} } duration={2}>
        {component}
    </Tween>
);

const ItemsContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: baseline;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    height: 60px;
    margin: 0 15px;

    img {
        height: 100%;
    }

    span {
        font-size: 0.7rem;
    }

    .new {
        color: #F07937;
        font-size: 0.6rem;
        padding: 5px;
    }
`;

const Ipad = (props) => {

    return (
        <ItemsContainer>
             <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
                <Item>
                    <img src={IpadPro} alt='ipad pro' />
                    <span>iPad Pro</span>
                </Item>
                <Item>
                    <img src={IpadAir} alt='ipad air' />
                    <span>iPad Air</span>
                    <span className='new'>New</span>
                </Item>  
                <Item>
                    <img src={IpadNormal} alt='ipad' />
                    <span>iPad</span>
                </Item>  
                <Item>
                    <img src={IpadMini} alt='ipad mini' />
                    <span>iPad mini</span>
                    <span className='new'>New</span>
                </Item> 
                <Item>
                    <img src={Compare} alt='compare' />
                    <span>Compare</span>
                </Item>
                <Item>
                    <img src={Pencil} alt='Apple Pencil' />
                    <span>Apple Pencil</span>
                </Item>   
                <Item>
                    <img src={Keyboard} alt='smart keyboard' />
                    <span>Smart Keyboard</span>
                </Item> 
                <Item>
                    <img src={Accessories} alt='accessories' />
                    <span>Accessories</span>
                </Item> 
                <Item>
                    <img src={IOS} alt='ios' />
                    <span>iOS 12</span>
                </Item> 
            </Tween>
        </ItemsContainer>
    )
};

export default Ipad;