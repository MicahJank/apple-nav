import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import AppleTv from './item-imgs/tv-imgs/tv-app.svg';
import TvPlus from './item-imgs/tv-imgs/apple-tv+.svg';
import Tv4K from './item-imgs/tv-imgs/apple-tv4k.svg';
import TvHD from './item-imgs/tv-imgs/apple-tv4k.svg';
import Airplay from './item-imgs/tv-imgs/airplay.svg';
import Accessories from './item-imgs/tv-imgs/accessories-tv.svg';




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
    color: white;
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


const TV = (props) => {

    return (
    <ItemsContainer>
        <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
            <Item>
                <img src={AppleTv} alt='apple tv' />
                <span>Apple TV app</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={TvPlus} alt='apple tv plus' />
                <span>Apple TV+</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Tv4K} alt='Apple tv 4K' />
                <span>Apple TV 4K</span>
            </Item>
            <Item>
                <img src={TvHD} alt='apple tv hd' />
                <span>Apple TV HD</span>
            </Item>
            <Item>
                <img src={Airplay} alt='apple airplay' />
                <span>AirPlay</span>
            </Item>
            <Item>
                <img src={Accessories} alt='accessories' />
                <span>Accessories</span>
            </Item>
        </Tween>
    </ItemsContainer>
    );
};

export default TV;