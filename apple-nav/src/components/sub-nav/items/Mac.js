import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import Air from './item-imgs/mac-imgs/macbook-air.svg';
import Pro from './item-imgs/mac-imgs/macbook-pro.svg';
import Imac from './item-imgs/mac-imgs/iMac.svg';
import MacPro from './item-imgs/mac-imgs/mac-pro.svg';
import Mini from './item-imgs/mac-imgs/mac-mini.svg';
import Compare from './item-imgs/mac-imgs/compare.svg';
import Display from './item-imgs/mac-imgs/pro-display.svg';
import Accessories from './item-imgs/mac-imgs/accessories.svg';
import OS from './item-imgs/mac-imgs/os.svg';



const ItemsContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: baseline;

    @media(max-width: 1070px) {
        width: 800px;
        text-align: center;
        margin: auto;
    }
    
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    height: 60px;
    margin: 0 15px;

    :hover {
        color: #549DD8;
    }


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

const Animation = (component) => (
    <Tween from={{x: '100px'} } duration={2}>
        {component}
    </Tween>
);

const Mac = (props) => {

    return (
        
        <ItemsContainer>
            <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
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
                <Item>
                    <img src={OS} alt='os' />
                    <span>Mojave</span>
                </Item>
            </Tween>
        </ItemsContainer>
    );
};

export default Mac;