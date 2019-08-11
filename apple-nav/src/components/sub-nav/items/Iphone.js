import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import IphoneXs from './item-imgs/iphone-imgs/iphone-xs.svg';
import IphoneXr from './item-imgs/iphone-imgs/iphone-xr.svg';
import Iphone8 from './item-imgs/iphone-imgs/iphone-8.svg';
import Iphone7 from './item-imgs/iphone-imgs/iphone-7.svg';
import Compare from './item-imgs/iphone-imgs/compare-iphone.svg';
import AppleCard from './item-imgs/iphone-imgs/apple-card.svg';
import AirPods from './item-imgs/iphone-imgs/air-pods.svg';
import Accessories from './item-imgs/iphone-imgs/accessories-iphone.svg';
import IOS from './item-imgs/iphone-imgs/ios.svg';

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


const Iphone = (props) => {

    return (
        <ItemsContainer>
            <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
                <Item>
                    <img src={IphoneXs} alt='iphone x-s' />
                    <span>iPhone Xs</span>
                    <span className='new'>New</span>
                </Item>
                <Item>
                    <img src={IphoneXr} alt='iphone x-r' />
                    <span>iPhone Xr</span>
                    <span className='new'>New</span>
                </Item>
                <Item>
                    <img src={Iphone8} alt='iphone 8' />
                    <span>iPhone 8</span>
                </Item>
                <Item>
                    <img src={Iphone7} alt='iphone 7' />
                    <span>iPhone 7</span>
                </Item>  
                <Item>
                    <img src={Compare} alt='compare' />
                    <span>Compare</span>
                </Item>
                <Item>
                    <img src={AppleCard} alt='apple card' />
                    <span>Apple Card</span>
                </Item> 
                <Item>
                    <img src={AirPods} alt='Air Pods' />
                    <span>AirPods</span>
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
    );
};

export default Iphone;