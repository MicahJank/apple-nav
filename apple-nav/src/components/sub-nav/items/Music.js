import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import AppleMusic from './item-imgs/music-imgs/apple-music.svg';
import Itunes from './item-imgs/music-imgs/itunes.svg';
import HomePod from './item-imgs/music-imgs/homepod.svg';
import AirPods from './item-imgs/music-imgs/air-pods.svg';
import IpodTouch from './item-imgs/music-imgs/ipod-touch.svg';
import Accessories from './item-imgs/music-imgs/accessories.svg';
import GiftCards from './item-imgs/music-imgs/gift-cards.svg';



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
const Music = (props) => {

    return (
    <ItemsContainer>
        <Tween from={{x: '200px', opacity: 0} } duration={0.5}>
            <Item>
                <img src={AppleMusic} alt='apple music' />
                <span>Apple Music</span>
            </Item>
            <Item>
                <img src={Itunes} alt='apple itunes' />
                <span>iTunes</span>
            </Item>
            <Item>
                <img src={HomePod} alt='home pod' />
                <span>HomePod</span>
            </Item>
            <Item>
                <img src={AirPods} alt='air pods' />
                <span>AirPods</span>
            </Item>
            <Item>
                <img src={IpodTouch} alt='ipod touch' />
                <span>iPod touch</span>
                <span className='new'>New</span>
            </Item>
            <Item>
                <img src={Accessories} alt='music accessories' />
                <span>Music Accessories</span>
            </Item>
            <Item>
                <img src={GiftCards} alt='gift cards' />
                <span>Gift Cards</span>
            </Item>
        </Tween>
    </ItemsContainer>
    );
};

export default Music;