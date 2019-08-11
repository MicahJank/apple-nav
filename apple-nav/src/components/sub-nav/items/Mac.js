import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import Air from './item-imgs/mac-imgs/macbook-air.png';
import Pro from './item-imgs/mac-imgs/macbook-pro.png';
import Imac from './item-imgs/mac-imgs/iMac.png';
import MacPro from './item-imgs/mac-imgs/mac-pro.png';
import Mini from './item-imgs/mac-imgs/mac-mini.png';
import Compare from './item-imgs/mac-imgs/compare.png';
import Display from './item-imgs/mac-imgs/pro-display.png';
import Accessories from './item-imgs/mac-imgs/accessories.png';



const ItemsContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    span {
        font-size: 0.7rem;
    }

    .new {
        color: #F07937;
        font-size: 0.6rem;
        padding: 5px;
    }
`;

const Animation = (component) => (
    <Tween from={{x: '100px'} } duration={2}>
        {component}
    </Tween>
);

const Mac = (props) => {

    return (
        
        <ItemsContainer>
            <Tween from={{x: '100px', opacity: 0} } duration={0.5}>
            <Item>
                <img src={Air} alt='macbook air' />
                <span>MacBook Air</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Pro} alt='macbook pro' />
                <span>MacBook Pro</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Imac} alt='imac' />
                <span>iMac</span>
            </Item>
            <Item>
                <img src={Imac} alt='imac pro' />
                <span>iMac Pro</span>
            </Item>
            <Item>
                <img src={MacPro} alt='Mac pro' />
                <span>Mac Pro</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Mini} alt='mac mini' />
                <span>Mac mini</span>
            </Item>
            <Item>
                <img src={Compare} alt='compare macs' />
                <span>Compare</span>
            </Item>
            <Item>
                <img src={Display} alt='Pro display' />
                <span>Pro Display XDR</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Accessories} alt='accessories for mac' />
                <span>Accessories</span>
            </Item>
            </Tween>
        </ItemsContainer>
    );
};

export default Mac;