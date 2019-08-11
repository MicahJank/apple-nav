import React from 'react';

import { NavLink } from 'react-router-dom';

import { Tween } from 'react-gsap';

import styled from 'styled-components';

//imgs
import Watch4 from './item-imgs/watch-imgs/watch-4.png';
import WatchNike from './item-imgs/watch-imgs/watch-nike.png';
import WatchHermes from './item-imgs/watch-imgs/watch-hermes.png';
import Watch3 from './item-imgs/watch-imgs/watch-3.png';
import WatchOs from './item-imgs/watch-imgs/watch-os.png';
import Bands from './item-imgs/watch-imgs/bands.png';
import Accessories from './item-imgs/watch-imgs/accessories-watch.png';
import Compare from './item-imgs/watch-imgs/compare-watch.png';

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
    padding-top: 5px;

    span {
        font-size: 0.7rem;
        margin-top: 5px;
    }

    .new {
        color: #F07937;
        font-size: 0.6rem;
        padding: 5px;
    }
`;


const Watch = (props) => {

    return (
        <ItemsContainer>
            <Tween from={{x: '200px', opacity: 0} } duration={0.5}> 
                <Item>
                    <img src={Watch4} alt='watch 4' />
                    <span>Apple Watch</span> 
                    <span>Series 4</span>
                </Item>
                <Item>
                    <img src={WatchNike} alt='watch nike' />
                    <span>Apple Watch</span>
                    <span>Nike+</span>
                </Item>
                <Item>
                    <img src={WatchHermes} alt='watch hermes' />
                    <span>Apple Watch</span>
                    <span>Hermés</span>
                </Item>
                <Item>
                    <img src={Watch3} alt='watch 3' />
                    <span>Apple Watch</span>
                    <span>Series 3</span>
                </Item>
                <Item>
                    <img src={WatchOs} alt='watch os' />
                    <span>WatchOS</span>
                </Item>
                <Item>
                    <img src={Bands} alt='bands' />
                    <span>Bands</span>
                </Item>
                <Item>
                    <img src={Accessories} alt='accessories' />
                    <span>Accessories</span>
                </Item>
                <Item>
                    <img src={Compare} alt='compare' />
                    <span>Compare</span>
                </Item>
            </Tween>
        </ItemsContainer>
    );
};

export default Watch;