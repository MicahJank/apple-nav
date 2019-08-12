import React, {useState, useEffect} from 'react';

import { NavLink } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { Tween } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import SearchIcon from './NavBar-Imgs/search_image_large.png';
import BagIcon from './NavBar-Imgs/shopping_bag_image_large.svg';

const StyledNavLink = styled.div`
    font-size: 0.9rem;
    transition: filter 0.3s;
    filter:brightness(100%);
    
    :hover {
        filter:brightness(70%);
        transition: filter 0.3s;
    }

    img {
        width: 15px;
    }
`;



const Icon = styled.div`
    font-size: 1.3rem;

    cursor: pointer;
    
    .bag {
        position: relative;
        top: 6px;
        width: 35px;
    }
`;

const StyledLink = (props) => {

    const [visibility, setVisibility] = useState(false);

    let content = '';
    switch(props.content) {
        case 'apple-icon':
            content = (<Icon> <FontAwesomeIcon icon={faApple} /> </Icon>);
            break;
        
        case 'mac':
            content = 'Mac';
            break;
        
        case 'ipad':
            content = 'iPad';
            break;

        case 'iphone':
            content = 'iPhone';
            break;
        
        case 'watch':
            content = 'Watch';
            break;

        case 'tv':
            content = 'TV';
            break;

        case 'music':
            content = 'Music';
            break;

        case 'support':
            content = 'Support';
            break;

        case 'search-icon':
            content = (<Icon onClick={props.clickFunction}><img src={SearchIcon} alt='search' /></Icon>);
            break;

        case 'bag-icon':
            content = (<Icon><img className="bag" src={BagIcon} alt='shopping bag' /></Icon>);
            break;

        default: 
            content = 'ERROR';
    }

    return (
        <StyledNavLink>{content}</StyledNavLink>
    );
};

export default StyledLink;